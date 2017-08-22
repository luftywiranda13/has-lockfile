# has-lockfile

[![npm](https://img.shields.io/npm/v/has-lockfile.svg?style=flat-square)](https://www.npmjs.com/package/has-lockfile)
[![Travis branch](https://img.shields.io/travis/luftywiranda13/has-lockfile/master.svg?style=flat-square)](https://travis-ci.org/luftywiranda13/has-lockfile)
[![npm](https://img.shields.io/npm/dm/has-lockfile.svg?style=flat-square)](https://npm-stat.com/charts.html?package=has-lockfile&from=2016-04-01)

Check which lockfile is present in the working directory.

Useful for tools that needs to know whether to use yarn or npm to install dependencies.

## Installation

```sh
npm install --save has-lockfile
```

## Usage

```
.
├── foo
    ├── package.json
    └── yarn.lock
└── bar
    ├── package.json
    └── package-lock.json
└── baz
    └── package.json
```

```js
const hasLockfile = require('has-lockfile');

hasLockfile('foo');
//=> yarn.lock

hasLockfile('bar');
//=> package-lock.json

hasLockfile('baz');
//=> null
```

## API

### hasLockfile([cwd])

Returns one of `package-lock.json`, `yarn.lock`, or `null`.

#### cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory.

## Related

- [has-yarn](https://github.com/sindresorhus/has-yarn) - Check if a project is using Yarn
- [has-package-lock](https://github.com/luftywiranda13/has-package-lock) - Check if a `package-lock.json` is present in the working directory

## License

MIT &copy; [Lufty Wiranda](https://www.instagram.com/luftywiranda13)
