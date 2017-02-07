
## invert-promise

If the promise rejects, the resulting promise will resolve with the rejection value. Likewise with
resolving becoming a rejection.

## install

```
npm install invert-promise
```

## usage

Examples from test.js:

```js
var invertPromise = require('invert-promise');

test('positive', (t) => {
  t.plan(1);
  invertPromise(Promise.resolve(1)).catch(x => t.equal(x, 1));
});

test('negative', (t) => {
  t.plan(1);
  invertPromise(Promise.reject(1)).then(x => t.equal(x, 1));
});
```

