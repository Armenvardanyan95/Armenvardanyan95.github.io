```ts
import { fromEvent, merge, interval } from 'rxjs'; 
import { filter, bufferWhen } from 'rxjs/operators';

const ACTIVE_EVENTS = ['click', 'scroll', 'contextmenu', 'dblclick', 'mousemove'];
// you can add as many events as you want to define "being inactive"

merge(...ACTIVE_EVENTS.map(event => fromEvent(document, event))).pipe(
  bufferWhen(() => interval(10_000)),
  filter(events => events.length === 0),
).subscribe(() => alert('You have been inactive for ten seconds!'));
```