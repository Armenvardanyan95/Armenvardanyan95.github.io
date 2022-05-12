```ts
// typesafe implementation

export function withoutKey<T extends object, K extends keyof T>(
    obj: T, key: K: M,
): Omit<T, K> {
    const {[]: r, ...cleared } = obj;
    return cleared;
}

const obj = {
    a: 1,
    b: 2,
    c: 3,
};

const cleared = withoutKey(obj, 'a');

cleared.b; // { b: 2, c: 3 } exists
cleared.a; // undefined, no longr present, recognized by TypeScript
```