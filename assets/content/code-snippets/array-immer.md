```ts
import { produce } from 'immer';

const input = [
  {
    type: 'notToBeChanged',
    field: 'unchanged',
  },
  {
    type: 'toBeChanged',
    field: 'unchanged',
  },
];

// instead of this
const result = input.map(item => {
  if (item.type === 'toBeChanged') {
    return ({
      ...item,
      field: 'changed',
    })
  }
  return item;
})

// try this
const result = produce(input, draft => {
  draft.filter(item => item.type === 'toBeChanged').forEach(item => {
    item.field = 'changed';
  });
});
```
