# has-lockfile

[![Package Version](https://img.shields.io/npm/v/has-lockfile.svg)](https://www.npmjs.com/package/has-lockfile)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/has-lockfile/master.svg)](https://travis-ci.org/luftywiranda13/has-lockfile)
[![Coverage Status](https://img.shields.io/codecov/c/github/luftywiranda13/has-lockfile/master.svg)](https://codecov.io/gh/luftywiranda13/has-lockfile)
[![Downloads Status](https://img.shields.io/npm/dm/has-lockfile.svg)](https://npm-stat.com/charts.html?package=has-lockfile&from=2016-04-01)

> Detect lockfiles in the working directory.

Useful for tools that needs to know whether to use `yarn` or `npm`.

## Installation

```sh
npm install --save has-lockfile
```

## Usage

```
.
├── foo
│   ├── package.json
│   └── yarn.lock
├── bar
│   ├── package.json
│   └── package-lock.json
├── baz
│   └── package-lock.json
└── qux
    ├── package.json
    ├── package-lock.json
    └── yarn.lock
```

```js
const hasLockfile = require('has-lockfile');

hasLockfile('foo');
//=> ['yarn.lock']

hasLockfile('bar');
//=> ['package-lock.json']

hasLockfile('baz');
//=> []

hasLockfile('qux');
//=> ['package-lock.json', 'yarn-lock']
```

## API

### hasLockfile([cwd])

Returns `Array<string>`.

#### cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory.

## Related

- [has-yarn](https://github.com/sindresorhus/has-yarn) - Check if a project is using Yarn
- [has-package-lock](https://github.com/luftywiranda13/has-package-lock) - Check if a `package-lock.json` is present in the working directory
- [pkg-man](https://github.com/luftywiranda13/pkg-man) - Detect which package manager that should be used

## License

MIT &copy; [Lufty Wiranda](https://www.instagram.com/luftywiranda13)
