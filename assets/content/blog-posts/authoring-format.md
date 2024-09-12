_Original cover photo by [Pankaj Patel](https://unsplash.com/@pankajpatel) on Unsplash._

Recently, the debate around Angular's component authoring format gained renewed traction again. Let's have a takedown and understand what options exist, and what I think would be the best for the framework we love.

> **WARNING** This blog post is pure speculation and fully hypothetical. I am not aware of any plans and directions the core team has in regards to component authoring format in Angular and am just stating my opinions about it, in addition to some developments in the wider community.


## What is an authoring format?

First, let's clear the air on the term "authoring format", which, in my experience, can be a bit confusing for lots of developers. What we mean by "authoring format" is the way we write components in Angular. For instance, currently Angular components are classes decorated with the `@Component` decorator, that can take some metadata which describes the component's template, styles, change detection, and so on. Angular components usually looks something like this:

```typescript
@Component({
  selector: 'my-component',
  template: `
    <div>
      <h1>{{ text }}</h1>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class MyComponent {
    text = 'Hello, World!';
}
```

For example, React components can look quite different, where we can use functions to define the component's template, logic, and so on:

```typescript
export const MyComponent = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};
```

As we can see, there is a different way of creating components in other frameworks, and that "way" is what is officially know as an "authoring format". 

With this settled, let's see what is "wrong" with the current authoring format.

## Downsides of the current authoring format

As we saw, components are defined using decorators. That in and of itself is a bit problematic, as decorators are still in the [proposal stage](https://github.com/tc39/proposal-decorators), meaning we in Angular are using the experimental version. You can see that if you go into any Angular project's `tsconfig.json` file, you will see something like this:

```json
{
  "experimentalDecorators": true,
}
```

This is a (small) source of friction, as it requires the Angular team to slightly maintain it and also is potentially subject to change in the future. This is why Angular has been slightly moving away from decorators, introducing things like signal-based inputs, view/content children, and encouraging to use the `host` metadata property instead of the `HostBinding` and `HostListener` decorators.

```typescript
@Component({
  selector: 'my-component',
  template: `
    <div>
      <h1>{{ text }}</h1>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  host: {
    '[class.my-class]': 'true',
    '(click)': 'onClick()',
  }
})
export class MyComponent {
  someInput = input('Hello');
  text = 'Hello, World!';

  onClick() {
    console.log('clicked!');
  }
}
```

Now, after the decorators, another problem that is more significant source of pressure is that the metadata itself is not very good. For instance, currently we have to add the `imports` property to the `@Component` decorator in order to use other components/directives/pipes in the template. 

In the community, it has been pointed out, multiple time, that we would like to drop that property so that Angular can automatically infer which components/directives/pipes are available in the template by the ES import at the top of the file:

```typescript
import { MyComponent } from './my-component.component';

@Component({
  template: `
    <div>
      <MyComponent/>
    </div>
  `,
})
export class MyComponent {}
```

This looks good and does not required a "double-import" of the component, but it does introduce another problem: now the component's won't have a custom selector, and instead will rely on the name of the component class, like in React. Angular's team is considering this approach as evidenced by [Minko Gechev](https://twitter.com/mgechev)'s tweet:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Oh, man. Wish I didn&#39;t put my name on this slide...<br><br>Joke aside, pretty excited about selectorless components. They will remove so much of the boilerplate and make Angular even easier to learn.<br><br>We&#39;re still many months away from the RFCs, though :) <a href="https://t.co/vGK7bIccvB">https://t.co/vGK7bIccvB</a></p>&mdash; Minko Gechev (@mgechev) <a href="https://twitter.com/mgechev/status/1773493609461113003?ref_src=twsrc%5Etfw">March 28, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Admittedly, not having a custom selector is not that big of a deal, so with this potential change, it won't introduce too much friction.

Now, with the above in mind, let's visit the biggest controversy surrounding the authoring format: single file components. 

## Single file components and their benefits (downsides?)

First of all, let us clarify what a single file component entails: a single file component (SFC) is a component that is defined in a single file, without external `.html` and `.scss` files. This is something already achievable in Angular, as we have seen with every single example in this very article. 

However, this is not something universally agreed upon, as lots of developers prefer to keep HTML and SCSS files, citing different reasons like separation of concerns, better developer experience, and more. Let's destructure these arguments to be able to form our own opinion.

### Separation of concerns - do separate HTML files achieve this?

When we say separation of concerns, what we mean is that different building blocks of our application should be responsible for different things, and not "intermingle" with each other and create confusion. For instance, a service responsible for loading user data should not also be responsible for showing error notifications:

```typescript
// bad
@Injectable()
export class UserService {
  loadUser() {
    return this.http.get('/user').pipe(
        catchError(() => of(this.handleError(error))) 
    );
  }

  handleError(error: Error) {
    console.error(error);
    return new ErrorNotification('Something went wrong!');
  }
}
```

Instead, each building block should interact with relevant parts of the application via strict interfaces, so that those blocks are reusable and separately testable. So, let's see if this applies to HTML and SCSS files in regards to their components.

1. HTML files are usually *not* reused, as they are tied to a certain component. While you hypothetically can put the same template in two different components, I have never personally encountered such an implementation in many years of working with Angular. In general, such an approach comes with way more questions than answers, and does not feel like a good practice.
2. HTML files are not separately testable. Sometimes developers skip unit testing HTML files, instead relying on end-to-end tests to test the entire application's UI. And even when they *do* unit test templates, this always comes with testing the entire component, which makes sense, as it it is the component that controls the template. 
3. Component template's HTML is 99% of the time edited together with the component's TypeScript logic. This is fairly obvious.
4. Neither component's logic, nor its template exist independently; the whole purpose of the template is to show the logic behind it in the UI; the entire purpose of the TypeScript component class is to determine the UI from the template. In this sense, there are no concerns to separate - they both, together, achieve one singular thing: rendering a dynamic UI.

> **NOTE** Everything mentioned here also applies to SCSS files

So, what if we assume (again, everything said here is, at least to an extent, subjective, people who like separate HTML files will have different opinions on what separation of concerns is) that those are not separate concerns, then what stops us from having SFCs? Let's move to the next counterargument.

### Developer experience - how can it be improved?

The main argument here is that with the current implementation of SFCs, we are essentially dealing with magic string, which can be problematic for developers sometimes. However, modern IDEs and their extensions are very good at understanding, that, for instance, the text inside the `template` property is actually an HTML template, and not just a string, which helps improve the DX quite a bit. 

With the arguments pro separate HTML and SCSS files covered, let's move to some arguments that can be made in favor of having SFCs.

### Avoiding larger components

With separate HTML and SCSS files, we can easily pretend that a fairly large component is not actually that big, because its TS file is just 120 or something lines of code. However if we view the component as a whole, a hypothetical 120 lines TS + 250 lines HTML + 40 lines of SCSS becomes a quite big component, which is need of actually being separated into smaller, simpler components. Having separate files can obscure this and gives the developers a false sense of security that the component is actually small.

This can also work in reverse - a single file component can become big, and the developers, instead of breaking it down into meaningful sub-components, might just separate the HTML and SCSS files and pretend that they simplified the component.

### Easier to refactor

When we have an SFC that got a bit too big, we can easily extract it into another class in the same file, just copy-pasting parts of the template and logic into a separate class int he same file, and then moving it to a new file when we are done. With separate HTML/SCSS files, we will need to jump around a bit. This is a small difference, but still a small point for SFCs.

### Easier to reason about

Now this might also seem like a small point, but it is actually bigger then the previous one. With a single file, we can easily search around when deep into solving some issue, and see where each property/method/whatever is used. This takes off a big chunk of mental load that jumping through files can introduce.

Now, as we mentioned all the pro and against arguments for SFCs, let's see what different members of the community proposed as solutions to these dilemmas.

## Existing solutions

Well, one solution is to just continue using SFCs as they are, with "magic" `template` and `styles` properties, which is just fine, and something that I personally prefer at this moment. However, multiple developers have approached this issue, both theoretically and practically, so let's begin by taking a look at the biggest step towards SFCs in Angular, which is, of course, the [Analog](https://analogjs.org/) metaframework developed and maintained by [Brandon Roberts](https://x.com/brandontroberts).

This framework has a lot of very fascinating features like file-based routing, but let's focus on the hot one: SFCs. In an experimental addition, Analog allows us to define components in a single `.analog` file, without classes, with `template`, `styles` and `script` tags. here is how a simple component looks like, straight from the docs:

```html
<script lang="ts">
  // counter.analog
  import { signal } from '@angular/core';

  const count = signal(0);

  function add() {
    count.set(count() + 1);
  }
</script>

<template>
  <div class="container">
    <button (click)="add()">{{count()}}</button>
  </div>
</template>

<style>
  .container {
    display: flex;
    justify-content: center;
  }

  button {
    font-size: 2rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
  }
</style>
```

To add component metadata like `host` bindings and so on, we can use the `defineMetadata` function:

```typescript
defineMetadata({
  host: { class: 'block articles-toggle' },
});
```

You can read more in the Analog documentation [here](https://analogjs.org/docs/experimental/sfc).

> **WARNING** Please be aware that this feature is experimental an also not supported by Angular itself.

When this first dropped, it became a very heated debate online, with some people celebrating the achievement, while others being quite skeptical as to what this means for Angular in general. However, one particular upside was that it proved that we do not have to be confined to "magic string-based" SFCs and can easily have something more ergonomic.

## Angular proposals

Angular team members have, on several occasions, mentioned that they are discussing some new ideas for component authoring format. Here is another tweet from Minko Gechev in response to Brandon:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We&#39;re not planning completely reimagining the authoring format. There will be incremental changes starting with opportunities enabled from standalone components.<br><br>The roadmap very much describes our plans :)</p>&mdash; Minko Gechev (@mgechev) <a href="https://twitter.com/mgechev/status/1758664293028069608?ref_src=twsrc%5Etfw">February 17, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This shows that Angular team members think about it, however are not planning anything revolutionary at this point. So, let's discuss what options exist.

### Some speculations

One idea that very quickly became another hot topic was the idea of functional components, like in React. The opposition to classes from some members of the Angular community was nothing new, but I personally do not think that *a)* components should become functions and *b)* that the core team will ever realistically discuss this.

My reasons for thinking like this is because, first of all, Angular itself is quite tied in with classes, and making functions into building blocks of this magnitude will require a lot of work both from the maintainers, and from the actual developers who use Angular and try to migrate.

In addition, semantically, having classes as components makes sense, because components act as custom HTML elements, and all HTML elements are instance of specific classes (`HTMLDivElement`, `HTMLAnchorElement`, etc.). So, it would be good to keep this approach. After all, components have state (properties) and behavior (methods), which works well when we consider them as classes. Way more ambiguity is introduced when we try to switch this mental model to functions.

## Finally, my opinion

We saw a bunch of examples here, and different approaches, so it is time for me to weigh in and state what I personally feel. First of all, as mentioned, I do think that SFCs are the way to go, even if nothing ever is changed in their current implementation. **I already prefer them**.

However, there are bunch of things that can be improved, for instance, using the class name as a selector and avoiding double imports can be good thing. Furthermore, I can see a value in having the template being fully separate, like in Analog, but without dropping the classes, something like this:

```html
<ng-template>
  @if (isVisible) {
    <span>Some content {{ text }}</span>
  }
</ng-template>
<script>
export class SomeComponent {
  isVisible = input.required<boolean>();
  text = input('Text');
}
</script>
```

I think that this is a good compromise, and I am not personally against it. However, I am not sure something like this will ever become reality (I would be happy though!). We have some nice experience with this in Ember:

```tsx
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { on } from '@ember/modifier';

export default class HelloWorld extends Component {
  @tracked count   
 = 0;

  increment = () => this.count += 1;

  <template>
    <p>You have clicked the button {{this.count}} times.</p>
    <button {{on "click" this.increment}}>Click</button>
  </template>   

}
```

This is a very nice experience, and I would love to see something similar in Angular.

## Conclusion

There isn't much to say about this, but the idea of exploring new authoring formats is fascinating, and yields lots of tangible results, like what we have seen with Analog. I believe that exploring further ideas will be a good way to land real developer experience improvements in Angular, and I am excited to see what the community will come up with next.