# has-lockfile

[![Package Version](https://img.shields.io/npm/v/has-lockfile.svg)](https://www.npmjs.com/package/has-lockfile)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/has-lockfile/master.svg)](https://travis-ci.org/luftywiranda13/has-lockfile)
[![Coverage Status](https://img.shields.io/codecov/c/github/luftywiranda13/has-lockfile/master.svg)](https://codecov.io/gh/luftywiranda13/has-lockfile)
[![Downloads Status](https://img.shields.io/npm/dm/has-lockfile.svg)](https://npm-stat.com/charts.html?package=has-lockfile&from=2016-04-01)

Detect lockfiles in the working directory.

Useful for tools that need to know whether to use `yarn` or `npm`.

## Installation

```sh
npm install --save has-lockfile
```

## Usage

```sh
$ tree
.
├── bar
│   ├── package-lock.json
│   └── package.json
├── baz
│   ├── package.json
│   └── yarn.lock
├── foo
│   ├── npm-shrinkwrap.json
│   └── package.json
├── qux
│   ├── npm-shrinkwrap.json
│   ├── package-lock.json
│   ├── package.json
│   └── yarn.lock
└── package.json
```

```js
const hasLockfile = require('has-lockfile');

hasLockfile();
// => false

hasLockfile('bar');
//=> true

hasLockfile.lockfiles();
//=> []

hasLockfile.lockfiles('bar');
//=> ['package-lock.json']

hasLockfile.lockfiles('baz');
//=> ['yarn.lock']

hasLockfile.lockfiles('foo');
//=> ['npm-shrinkwrap.json']

hasLockfile.lockfiles('qux');
//=> ['package-lock.json', 'yarn.lock', 'npm-shrinkwrap.json']
```

## API

### hasLockfile([cwd])

Returns `boolean`.

### hasLockfile.lockfiles([cwd])

Returns `Array` of lockfiles.

#### cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory.

## Related

* [has-package-lock](https://github.com/luftywiranda13/has-package-lock) － Check if a `package-lock.json` is present in the working directory
* [has-shrinkwrap](https://github.com/luftywiranda13/has-shrinkwrap) － Check if `npm-shrinkwrap.json` is present in the working directory
* [has-yarn](https://github.com/sindresorhus/has-yarn) － Check if a project is using Yarn
* [pkg-man](https://github.com/luftywiranda13/pkg-man) － Detect which package manager that should be used

## License

MIT &copy; [Lufty Wiranda](https://www.luftywiranda.com)
