'use strict';

const hasPackageLock = require('has-package-lock');
const hasYarn = require('has-yarn');

module.exports = cwd => {
  let lockfile = null;

  if (hasPackageLock(cwd || process.cwd())) {
    lockfile = 'package-lock.json';
  } else if (hasYarn(cwd || process.cwd())) {
    lockfile = 'yarn.lock';
  }

  return lockfile;
};
