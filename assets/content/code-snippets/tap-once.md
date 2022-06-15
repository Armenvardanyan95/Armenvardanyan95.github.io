```ts
function tapOnce<T>(cb: (item: T) => any, index = 0) {
  return function(source: Observable<T>) {
    return source.pipe(
      map((data, i) => ({data, i})), // get the index
      tap(({data, i}) => {
        if (i === index) { // check if index matches
          cb(data); // perform the side effect
        }
      }),
      map(({data}) => data), // map back to the original emission
    )
  }
}

of(1, 2, 3, 4, 5).pipe(
    tapOnce(console.log), // will log 1
).subscribe();
```