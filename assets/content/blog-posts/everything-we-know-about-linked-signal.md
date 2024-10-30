Since Angular v16, we have a new reactive primitive called `Signal`. Of course, almost everyone knows about signals today, and has already come up to the realization that they are still a bit... raw.

Usually, when devs encountered a an issue with signals, they just slapped an `effect` to make it work as they wanted. This, of course, is not a very desirable approach. Here is an excerpt from the [Angular documentation](https://angular.dev/guide/signals#use-cases-for-effects):
![Second paragraph at https://angular.dev/guide/signals#use-cases-for-effects](/assets/content/blog-posts/when-not-to-use-effect.png)

As we can see, Angular itself discourages using `effect` and instead treats it as a very low-level building block, which we should only use in exceptional circumstances.

So, what's the real solution?

Around a week ago, A [new pull request](https://github.com/angular/angular/pull/58189) appeared in the Anghular repo, introducing a new primitive called `LinkedSignal`. This primitive is to be used for situations when a signal is dependant on another signal, but also independent enough that it can be updated on its own by other actors.

Here is an example:

```typescript
export class SomeComponent {
    count = input(0);
    // this value will be set every time `count` changes
    dependantCount = linkedSignal(() => this.count());

    increment() {
        // we can change the value
        this.dependantCount.update(previous => previous + 1);
    }
}
```

Now, this gives us lots of flexibility. Let's see how it can change things for us.

## Improved ergonomics for signal inputs

Signal inputs, by design, are not writable. Sometimes, when we have a piece of data that can be changed locally but also needs to be updated via parent component, we might be tempted to just use `model` instead. This is not very good however, because it enables two-way data binding, which might not be ideal for us.

Instead, we can use `linkedSignal` to create a signal that is linked to an input, but can also function locally *without* triggering a change in the parent. Here is an example:

```typescript
export class MyComponent {
  rawCount = input(0, {alias: 'count'});
  linkedCount = linkedSignal(() => this.count()); 

  increment() {
    this.count.update(previous => previous + 1);
  }
}
```

Great, now we don't have to worry about local data that needs to be updated according to the parent component! What else can it do?

## Improvements for template-driven forms

With template-driven forms, it can be a bit of a challenge to update default values of contrls based on another value (signal). This won't be the case with `linkedSignal`, as we can now define some controls as inherently linked to some other value:

```typescript
@Component({
    template: `
        <form>
            <select [(ngModel)]="selectedOption">
                @for (option of options; track option) {
                    <option [value]="option">{{option}}</option>
                }
            </select>
        </form>
    `,
})
export class SelectComponent {
    options = input(['a', 'b', 'c']);
    selectedOption = linkedSignal(() => this.options()[0]);
}
```

As we can see, here the`selectedOption` is linked to the first element of the `options` array, and will be updated whenever the `options` array changes. But, and this is the magic really happens, it is also bound to the `input` value, so that the user can change it, making it super-reactive!

## Improved interoperability with RxJS

Sometimes, we want to read an `Observable` value, but also want to be able to update it locally. Here is an example:

```typescript
export class MyComponent {
    private readonly dataService = inject(DataService);
    rawText = toSignal(this.dataService.getText(), {initialValue: ''});
    
    // the default value is the value of the observable
    text = linkedSignal(() => this.rawText());

    updateText() {
        // but we still can update the value if we want
        this.text.set('New text!');
    }
}
```

Now, we can source our signals from other Observables too just by converting those to signals too and using `linkedSignal` to connect them. 

## Improving two way connection fo data

This is not the same as two-way binding, what we mean here is the ability to both source the data from a continuous stream (maybe even real-time), but also be able to update it manually. Here is an example of a chat box:

```typescript
export class ChatComponent implements OnInit {
  private readonly socketService = inject(SocketService)
  stream = toSignal(this.socketService.getMessages());
  
  // this will reset every time there is
  // a new message from the backend
  chatData = linkedSignal(() => this.stream());

  addMessage(text: string) {
    // we still can push new messages
    // with optimistic updates to our signal
    this.chatData.update((messages) => [...messages, {text}]);
  }
}
```

This previously was not possible without using an `effect` or an RxJS subscription. Now, this is very simple and straightforward.

## How does this work?

Because of several (or sometimes even more) signals involve, this might become a bit confusing. For that reason, I compiled this graphic to show the flow of a `linkedSignal`:

![Mermaid Flowchart: flowchart TD
    Signal[Some Signal] -->|When the signal changes, linked signals will reset| LinkedSignal(Linked Signal)
    ManualUpdate[Manual Update] -->|Also updates the linked signal| LinkedSignal](/assets/content/blog-posts/linked-signal-flow.png) 

As we can see, both the source signal and manual updates will change its value, and only the timing of the change will determine which one will be the current result. For instance, initially the linked signal will have the value of the source signal, but after the first manual update, it will have the value of the manual update. Later, if at some point the source signal changes, the linked signal will change to the new value.

Here is another graphic explaining the *lifecycle* of a `linkedSignal`:

![Mermaid flowchart: flowchart TD
    Start[Linked Signal created, value: 1] -->|Manual increment| AfterManual[(Value: 2)]
    AfterManual --> |Manual Increment|AnotherManual[(Value: 3)]
    AnotherManual --> |Source value set to 10|SourceValueChanged[(Value: 10)]
    SourceValueChanged --> |Manual Increment|YetAnotherManualIncrement[(Value: 11)]](assets/content/blog-posts/linked-signal-lifecycle.png) 

Hopefully, this can clear everything up in regards to how `linkedSignal` works. Finally, let's take a look at the API of this function, because it has more complex use cases than what we have shown so far.

## The API

We have shown `linkedSignal` as a function similar to `computed`, which takes a callback function as an argument and returns a signal that has the value that the callback returned, with only difference being that the returned signal is also writable, as opposed to what we have with `computed`.

However, there can be issues when we want to reset the value of the linked signal when the source changes, but we **do not** care about the source value itself at all. In that case, we might wind up with a very confusing callback function:

```typescript
export class MyComponent {
    options = input([1, 2, 3]);
    selectedOption = linkedSignal(() => {
        // we only do this to make the signal track `options`
        this.options();
        // we do not care about the value of `options` at all
        // we just reset to 0
        return 0;
    });
}
```

To avoid situations like this, `linkedSignal` has another signature that allows us to define the sources, but use a different computation function:

```typescript
export class MyComponent {
    options = input([1, 2, 3]);
    selectedOption = linkedSignal({
        source: this.options,
        computation: () => 0,
    });
}
```

Here, we explicitly tell what the source signal is, but use a separate computation function to define what we want to do when the source changes.

## In Conclusion

`linkedSignal` is going to be a very powerful tool, and will most probably become available with Angular v19. In the meantime, if you want to play around with it and explore use cases, you can use this StackBlitz built by [@MichaelSmallDev](https://twitter.com/MichaelSmallDev) to do so:

<iframe src="https://stackblitz.com/edit/stackblitz-starters-vm6c3r?ctl=1&embed=1&file=src%2Fapp%2Fparent.component.ts&hideExplorer=1&view=editor" height="500" width="100%"></iframe>