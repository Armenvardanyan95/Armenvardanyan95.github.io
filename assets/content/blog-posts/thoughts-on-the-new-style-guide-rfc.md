In order to improve Angular’s developer experience, the Angular team recently released a [Request for Comments (RFC)](https://github.com/angular/angular/discussions/58412) that introduces a few significant adjustments to Angular’s style guide, the comprehensive document that details the conventional approaches to naming files, classes, functions, and using certain features. 

This RFC suggests changes to naming patterns, specifically how we approach event handlers, file names, and `host` metadata in Angular components, and a bunch of other more obvious changes. Let's dive in and explore the proposed changes in more detail, and try to understand how it will affect us in the future.

## Overall changes

Keen readers of the Angular documentation might have noticed that the style guide is quite outdated, does not contain guidance on the most recent features like signals, rxjs-interop, and more. This prompted the team to introduce ideas for (quite significant) changes to the style guide, so let's first observe the general direction where the document will be moving.

- **Make the style guide shorter and more focused**: The RFC suggests that the style guide is very long and contains too many generic coding practice guidelines like "out only one class per file" or "use the single responsibility principle when writing components" and so on. The goal is to make the style guide way shorter and for it to contain only *stylistic* advice and *only* related to Angular, not coding in general  

- **Stop recommending the "on" prefix for event handlers**: The "on" prefix (e.g., `onClick`) is no longer recommended, as it adds unnecessary verbosity. Event handler methods should be named directly after the events they handle, like `click`.

- **Stop recommending suffixing file names and class names with type indicators**: Angular traditionally appends type suffixes (like `.component.ts`) to file names and classes. The RFC suggests removing these suffixes when the context is clear, promoting shorter, cleaner names.

- **HostBinding/HostListener vs. host metadata**: Clarifies when to use `HostBinding`/`HostListener` decorators versus `host` metadata. The goal is to encourage more declarative `host` metadata in component metadata while keeping `HostBinding`/`HostListener` for class-bound logic.

- **Provide clearer guidance on Angular naming and organization conventions**: The RFC aims to make naming and structural conventions in Angular more intuitive and in line with broader TypeScript and JavaScript practices.

---

While some of these make full sense, like the removal of the suggestion to prefix event handlers with "on", others have the potential to be quite controversial, so let's discuss them and see what challenges will we face when adopting those updated guidelines.

---

## 1. Rethinking Suffixing File and Class Names with Type Indicators

Now, this is a big one. Almost every Angular developer is used to appending file names and class names with a type indicator (e.g., `.component.ts` for components, `.service.ts` for services, and, respectively `SomeComponent` or `SomeService`). However, the RFC argues that this suffixing convention can often lead to verbosity without necessarily improving clarity. 

The proposed shift here is to get rid of suffixes and just write the name of what the class does, and the code itself will be evidence of what it does. However, in terms of services, the suggestion is to not use `-Service` suffix at all, and instead to use more concrete suffixes. 

For instance, a class that makes HTTP calls to retrieve product data will be renamed from `ProductService` to `ProductDataClient`, or `ProductAPI`, or whatever else we might think is more suitable.

### Practical Implications
While this change might seem minor, it can impact the way developers organize and locate files. This change comes in two parts - removing class suffixes and removing filename suffixes. And we will see that the two are quite distinct in their implications.

In terms of class suffixes, removing them can lead to confusion, for instance, between a name of a type (`Comment`) and a name of a component (`CommentComponent`). However, it can be argued that this can also lead to better component names, as, for instance, a `CommentItem` or `CommentDetails` or `CommentPage` might be better and more descriptive than `CommentComponent`, while `Comment` should only describe "a comment" as a unit of data.

It gets way trickier with file suffixes. While file suffixes definitely make file names longer, they can also be more helpful in terms of locating files, or even just visually scanning a large codebase to discover patterns or explore the architecture. 

As a matter of fact, developers and IDE/plugin vendors have been utilizing these conventions to highlight files with different icons to make the file tree more visually appealing and easier to navigate. Here is an example:

![Small Angular project file tree with different file types highlighted with differently colored icons](/assets/content/blog-posts/file-type-highlight.avif)

So, with this change, if we truly adhere by it, most of these extensions and small perks will stop functioning properly, which can definitely cause problems.

---

## 2. Removing the suggestion to put templates in a separate file

Angular has always supported both single file components (SFCs) and component with separate `.ts` and `.html` files. However previously, the style guide recommended putting the template in a separate file over having everything in a single `.component.ts` file. 

This was standard practice for a huge chunk of Angular developers (although a very strong movement for SFCs exists). And now, this guide will be reversed, meaning that Angular no longer prefers one approach over the other and just recommends teams to choose one approach and be consistent with it.

Also, this should not be seen as the team "endorsing" SFCs, and mostly just as a removal of any recommendation whatsoever on this matter.

If this guidance confuses you, you can refer to my [recent article](https://www.angularspace.com/angular-friction-points/) where I have a section dedicated to SFCs vs separate files.

(By the way, another point that made some developers upset was a line explaining this change that contained a reference to the "the popularity of both JSX-based template styles and
single-file component formats". I feel compelled to clarify that the Angular team does not consider using JSX with Angular and has never made comments that might actually suggest otherwise)

### Practical Implications

This is not by itself a big change, as teams will probably continue to choose either SFCs or separate files based on their preference and be done with it. This will, however, most probably, lead to more new projects adopting SFCs. To learn more about new approaches to component authoring and why I personally prefer SFCs, read my article [here](https://armenvardanyan.dev/blog/authoring-format).

---

## 3. Suggest using `protected` for class members used only in the template

This suggestion is not too controversial, but is something that has not been previously suggested and is not yet a widely adopted practice. Using it will have a benefit of separating properties meant for the view and disallowing them from being accessed from other classes:

```typescript
@Component({
  selector: 'my-component',
  template: `
    <div>
      <h1>{{ title }}</h1>
    </div>
  `,
})
export class MyComponent {
  protected title = 'Hello, World!';
}


@Component({
  selector: 'other-component',
})
export class OtherComponent {
    readonly #myCmp = inject(MyComponent);
    
    ngOnInit() {
        // this could potentially cause issues 
        // but is rendered impossible with the 
        // `protected` access modified
        this#myCmp.title = 'Hello Angular';
    }
}
```

### Practical Implications

This is not a very big change, and can only cause issues if the developer is using an approach described in the example above, which is quite rare.

---

## 4. Suggest using `readonly` on properties initialized by Angular

This proposal is very simple if we are already using signal-based inputs, outputs, view children and so on.

```typescript
@Component({/* ... */})
export class UserProfile {
  readonly userId = input();
  readonly userSaved = output();
}
```

Signal inputs are already immutable, so this ensures that the developer is not accidentally overwriting the actual signal reference with something else overall.

### Practical Implications

The only situation where this can cause confusion is when decorator-based inputs (and only inputs, are used), because they cannot be marked as `readonly`, as Angular directly mutates the input value, which would be impossible to do if it is read only. 

My suggestion would be to do your best to switch to signal-based inputs, as this style guide is pretty decent and useful.

---

## 5. Suggest using `class`/`style` bindings instead of `ngClass`/`ngStyle`

This is not controversial by itself, as both work relatively similarly, however `ngClass` and `ngStyle` are very popular and used in many codebases. However, the proposal makes full sense as `[class]` and `[style]` are simpler, and have a small performance benefit (no directive is being instantiated).

## Notable Omissions

We talked about the things that have been added to the style guide, now let us discuss things that are yet missing.

- **Any style guidelines related to signals**: The RFC does not mention anything about signals, as they are a relatively new feature in Angular, with lots of its related parts still being in developer preview. Right now a discussion is raging, for example, on whether we should prefix/suffix signals with some symbol to denote it is a signal. I'm sure in the future the style guide will be updated to clarify the core team's position on things like this.
- **RxJS interoperability**: The RFC does not mention anything about RxJS as of right now, and this probably is also connected to signals. As many approaches and new (also native) tools are emerging right now, the team will probably include more advice on this topic in the future.
- **More general guidance on conventions**: we have seen specific things in the draft, but not more general or architectural advice. It is unclear if the team intends to include more on this, but wer can be sure that, as mentioned, generic coding advice will be removed.

## Conclusion

Angular is growing and changing rapidly, and the style guide was pretty much lagging behind. With this RFC, we, as a community, can work together to make sure it is up to date and includes everything that is important. 

So, I encourage you to head over to GitHub, give it a read, and maybe contribute with comments of your own concerns and suggestions!