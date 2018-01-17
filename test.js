'use strict';

const hasLockfile = require('./');

describe('output', () => {
  test('no lockfiles', () => {
    expect(hasLockfile()).toBe(false);
    expect(hasLockfile.lockfiles()).toEqual([]);
  });

  test('package-lock.json', () => {
    expect(hasLockfile('fixtures/bar')).toBe(true);
    expect(hasLockfile.lockfiles('fixtures/bar')).toEqual([
      'package-lock.json',
    ]);
  });

  test('yarn.lock', () => {
    expect(hasLockfile('fixtures/baz')).toBe(true);
    expect(hasLockfile.lockfiles('fixtures/baz')).toEqual(['yarn.lock']);
  });

  test('npm-shrinkwrap.json', () => {
    expect(hasLockfile('fixtures/foo')).toBe(true);
    expect(hasLockfile.lockfiles('fixtures/foo')).toEqual([
      'npm-shrinkwrap.json',
    ]);
  });

  test('all lockfiles', () => {
    expect(hasLockfile('fixtures/qux')).toBe(true);
    expect(hasLockfile.lockfiles('fixtures/qux')).toEqual([
      'package-lock.json',
      'yarn.lock',
      'npm-shrinkwrap.json',
    ]);
  });
});
