```ts
// instead of this
fromEvent(document.querySelector('input'), 'input').pipe(
  debounceTime(300),
  map(event => (event.target as HTMLInputElement).value),
  switchMap(query => getData(query)),
  switchAll(),
  map(({firstName, lastName}) => firstName + ' ' + lastName),
  toArray(), // you will never receive this value, as "fromEvent" never completes on itself
).subscribe(console.log);

// do this
fromEvent(document.querySelector('input'), 'input').pipe(
  debounceTime(300),
  map(event => (event.target as HTMLInputElement).value),
  switchMap(query => getData(query).pipe(
    switchAll(),
    map(({firstName, lastName}) => firstName + ' ' + lastName),
    toArray(), // now the inner Observavble completes and emits with each "fromEvent" emission
  )),
).subscribe(console.log);
```