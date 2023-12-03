_Original cover photo by [Laura Cleffmann](https://unsplash.com/@cloudett) on Unsplash._

In recent releases of our beloved Angular framework we have seen a couple of changes that might, in my opinion, reveal the general course Angular is going to take in the future. In this post I will try to explain what I think is going on and what it means for us as Angular developers.

## What is new?

Here is a bunch of changes introduced in the releases [14.0.0](https://blog.angular.io/angular-v14-is-now-available-391a6db736af) and [15.0.0](https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8):

- Standalone components
- Typed Forms
- `inject` function
- Function based guards and so on
- Better stack traces
- And much more

While in general most of the changes are standard things that the community has been asking for a long time, there are a couple of things that are a bit more interesting. Mainly here the `inject` function is of particular interest.

## What is the `inject` function?

I have written (I think) [two](https://dev.to/this-is-angular/always-use-inject-2do4) [articles](https://dev.to/this-is-angular/change-detection-without-change-detection-5pa) about the `inject` function, so I will not dive too deep into it, but a basic explanation is that the function allows us to get references to dependencies directly in the code, without using the constructor-based dependency injection. This is quite big, because now we can use dependency injection in contexts where we previously could not; for example, functions or function factories. 

This also means we can now write guards and resolvers and much more just as functions, or create functional factories that return different strategies based on a route. I wrote some examples of it in one of [my recent articles on NgRx](https://dev.to/this-is-angular/ngrx-use-cases-part-i-restricting-access-30lo) (scroll to the *"Handling permissions with NgRx"* section). 

Here is a small example from that article:

```typescript
export function hasPermissionGuard(permission: string) {
  return function () {
    const store = inject(Store);
    return store.select(selectHasPermission(permission));
  };
}
```

## Standalone components - what this means?

Previously, we could only declare components coupled to certain modules. In my opinion, it only sounded as a good approach, it made our apps "modular", but also resulted in some downsides, most notably:

- modules could become a mess
- no clear definition of what should and should not constitute a module
- hard to explain the concept of modules to newcomers

Whish is why I am very excited about standalone components, which would allow us to ditch `NgModule`-s. Because of interoperability with the module based components, we can also smoothen out the process of ditching modules for good.

I already tried building a functioning app without `NgModules`-s, and to be honest, it really was a plesure. 

## What to expect?

Recently, [Minko Gechev](https://twitter.com/mgechev) from the Angular team tweeted this:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve been reading online rumors that Angular &quot;is leaving RxJS&quot; and &quot;building state management library&quot; but that is incorrect.<br><br>We&#39;re exploring making Zone.js optional by integrating new reactivity primitive into the framework and not rebuilding ngrx, etc.<br><br>Few goals:<br><br>🧵 (1/4)</p>&mdash; Minko Gechev (@mgechev) <a href="https://twitter.com/mgechev/status/1612870428359561217?ref_src=twsrc%5Etfw">January 10, 2023</a></blockquote>

So you might be asking, what the hell is a "reactive primitive"? Well, if you have any experience with [SolidJS](https://www.solidjs.com/), you might have heard about signals - and that is what we are talking about. So let's talk signals

### What are Signals, and what do I do with them?

Signals are a new primitive that allows us to create reactive values. They are similar to [RxJS observables](https://rxjs.dev/guide/observable), but they are much simpler and more lightweight. They are also much easier to use, because they are just a single function, and they are not tied to any specific framework. In [this page](https://www.solidjs.com/tutorial/introduction_signals), SolidJS documentation explains how they work. 

Having signals in Angular would probably look something like this:

```typescript
export class MyComponent {
    private readonly count = signal(0);
    
    increment() {
        this.count(this.count() + 1);
    }
}
```

And then, in our template we can call on the `count` signal like this:

```html
<button (click)="increment()">Increment</button>

<p>Count: {{ count }}</p>
```

And that is it. We have a reactive value that we can use in our template. As Minko mentioned in his tweet, this can also potentially make zone.js obsolete, and the current change detection model will be replaced with a new one.

> P.S about new changes: in [15.1.0](https://github.com/angular/angular/releases/tag/15.1.0) Angular also introduced [self-closing component selectors](https://github.com/angular/angular/pull/48535), meaning that instead of `<my-component></my-component>` we can now write `<my-component />`. This is a very small change, but it is an addition that I really love 

## What does this mean for us?

So with standalone components, self-closing tags, functional dependency injection (class-based guards are even getting deprecated in favor of functional guards with `inject`), maybe signals and zonejs-less future, this all kinda feels like... React? Lots of people have already been making this argument on twitter, resulting in some pretty hot debate.

Here is my two cents on why this is not the case:

### Good looking things from React, but not the implementations

From the very beginning Angular received some criticizms on being too "OOP-heavy". Other frameworks, especially React, also had class-based components and everything, for example, but gradually drifted away towards more functional, "declarative", if you will, approach. But (in my opinion), there is a bunch of things React didn't get right, and the main issue for me is how it handles re-rendering. 

In React, before hooks, class-based components had a special `render` method, which, well, did the rendering; it returned some JSX based on the state and the props of the component. Everything else was sort of decoupled from the rendering process, which made this function pretty easy to deal with. On every state change, `render` would be called again with new data, and then the diffing algorithm would figure out what needs to be updated in the UI. 

```typescript
export class ReactClassBasedComponent extends React.Component {
    render() {
        return <div>{this.props.someProp}</div>
    }
}
```

But with functional components, these functions, other than JSX, also contain, well, everything else the component does, resulting in problems that would cause unnecessary re-renderings, some confusion, difficult to explain concepts, and so on. 

```typescript
export const ReactFunctionalComponent = (props) => {
    const [state, setState] = useState(0);
    
    useEffect(() => {
        // do something
    }, [state]);

    const handler = useCallback(() => {
        // do something
    }, []); 
    // sometimes, you might need to use useCallback
    // for event handlers to avoid re-renderings,
    // read more about it here: https://beta.reactjs.org/reference/react/useCallback
    
    return <div onClick={handler}>{props.someProp}</div>
}
```

Angular already has the rendering completely separated from whatever else is going on in the component, and I think that is a good basis for building something that might adopt the simplicity that React has, but without the downsides. 

SolidJS already did this with signals. If we are going to have signals in Angular, this might signify a new future for how Angular does things.

### Angular already has functional programming

Despite being based on OOP, Angular started right off with RxJS, a mostly purely functional library. Now we have functional resolvers, guards, with dependency injection we can write functions that share logic between parts of our app **without** being tied to any specific class or OOP for that matter. Does OOP have a place in Angular? It absolutely does, but in my opinion, it is good for structuring the application as a whole, but not for representing the logic of invidual pieces; and this is where FP is going to shine.

## In Conclusion

What I mainly love about Angular is how they listen to the community and are not afraid of changes, while at the same time providing pretty decent interoperability with previous versions (as late examples - untyped forms are still available for migrating to typed forms iteratively, stanndalone components work easily with components in modules and so on). With all those new changes on our way, I think Angular's future is very bright.