'use strict';

const hasPackageLock = require('has-package-lock');
const hasYarn = require('has-yarn');

const hasLockfile = cwd => {
  cwd = cwd || process.cwd();

  const lockfiles = [];

  if (hasPackageLock(cwd)) {
    lockfiles.push('package-lock.json');
  }

  if (hasYarn(cwd)) {
    lockfiles.push('yarn.lock');
  }

  return lockfiles;
};

module.exports = hasLockfile;
