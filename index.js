'use strict';

const hasPackageLock = require('has-package-lock');
const hasShrinkwrap = require('has-shrinkwrap');
const hasYarn = require('has-yarn');

const lockfiles = (cwd = process.cwd()) => {
  return [
    hasPackageLock(cwd) && 'package-lock.json',
    hasYarn(cwd) && 'yarn.lock',
    hasShrinkwrap(cwd) && 'npm-shrinkwrap.json',
  ].filter(Boolean);
};

module.exports = (cwd = process.cwd()) => {
  if (lockfiles(cwd).length > 0) {
    return true;
  }

  return false;
};

module.exports.lockfiles = lockfiles;
