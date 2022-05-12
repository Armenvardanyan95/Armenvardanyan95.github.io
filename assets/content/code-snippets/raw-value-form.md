```ts
const form = this.formBuilder.group({
  name: [''],
  age: [''],
});
form.get('age').disable();

const value = form.value;
console.log(value); // {name: ''}
const rawValue = for.getRawValue();
console.log(rawValue); // {name: '', age: ''}
```