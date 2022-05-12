```ts
responseFromServer$.pipe(
    retry({
        count: 3, // we can also OPTIONALLY 
                  // provide how many times 
                  // a user is allowed to retry 
        delay: () => fromEvent(
              document.querySelector('#retryBtn'),
              'click',
        ), // wait for the user to click the button
    }),
);
```