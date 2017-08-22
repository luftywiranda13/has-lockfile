'use strict';

const hasLockfile = require('./');

test('output', () => {
  expect(hasLockfile('fixtures/bar')).toBe('package-lock.json');
  expect(hasLockfile('fixtures/baz')).toBe(null);
  expect(hasLockfile('fixtures/foo')).toBe('yarn.lock');
});
