'use strict';

const hasPackageLock = require('has-package-lock');
const hasYarn = require('has-yarn');

module.exports = cwd => {
  cwd = cwd || process.cwd();
  let lockfile = null;

  if (hasPackageLock(cwd)) {
    lockfile = 'package-lock.json';
  } else if (hasYarn(cwd)) {
    lockfile = 'yarn.lock';
  }

  return lockfile;
};
