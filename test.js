'use strict';

const hasLockfile = require('./');

test('output', () => {
  expect(hasLockfile()).toEqual([]);
  expect(hasLockfile('fixtures/bar')).toEqual(['package-lock.json']);
  expect(hasLockfile('fixtures/baz')).toEqual([]);
  expect(hasLockfile('fixtures/foo')).toEqual(['yarn.lock']);
  expect(hasLockfile('fixtures/qux')).toEqual([
    'package-lock.json',
    'yarn.lock'
  ]);
});
