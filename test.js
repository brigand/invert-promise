var test = require('tape');
var invertPromise = require('./');

test('positive', (t) => {
  t.plan(1);
  invertPromise(Promise.resolve(1)).catch(x => t.equal(x, 1));
});

test('negative', (t) => {
  t.plan(1);
  invertPromise(Promise.reject(1)).then(x => t.equal(x, 1));
});

