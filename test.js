'use strict';

const hasLockfile = require('./');

describe('output', () => {
  test('no lockfiles', () => {
    expect(hasLockfile()).toEqual([]);
    expect(hasLockfile('fixtures')).toEqual([]);
  });

  test('package-lock.json', () => {
    expect(hasLockfile('fixtures/bar')).toEqual(['package-lock.json']);
  });

  test('yarn.lock', () => {
    expect(hasLockfile('fixtures/baz')).toEqual(['yarn.lock']);
  });

  test('npm-shrinkwrap.json', () => {
    expect(hasLockfile('fixtures/foo')).toEqual(['npm-shrinkwrap.json']);
  });

  test('all lockfiles', () => {
    const expected = expect.arrayContaining([
      'package-lock.json',
      'yarn.lock',
      'npm-shrinkwrap.json',
    ]);

    expect(hasLockfile('fixtures/qux')).toEqual(expected);
  });
});
