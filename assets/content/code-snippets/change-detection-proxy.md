```ts
function useState<State extends Record<string, any>>(state: State) {
    const cdRef = inject(ChangeDetectorRef);
    cdRef.detach(); // we don't need automatic change detection
    setTimeout(() => cdRef.detectChanges()); // detect the very first changes when the state initializes
    return new Proxy(state, {
        set: (target, property: string, value) => {
            (target as Record<string, any>)[property] = value; // change the state
            cdRef.detectChanges(); // manually trigger the change detection
            return true;
        },
        get(target, property: string) {
            return (target as Record<string, any>)[property]; // just return the state property
        },
    });
}

@Component({
    selector: "my-component",
    template: `
    <div>
        {{text}}
    </div>
    <button (click)="onClick()">Click me!</button>
    `
})
export class MyComponent {
    vm = useState({text: 'Hello, World!'}); // now we have a state

    onClick() {
        this.vm.text = "Hello Angular"; // works as expected, changes are detected
    }
    get text() {
        console.log('working');
        return this.vm.text;
    }
}
```