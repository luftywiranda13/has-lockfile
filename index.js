'use strict';

const hasPackageLock = require('has-package-lock');
const hasShrinkwrap = require('has-shrinkwrap');
const hasYarn = require('has-yarn');

const lockfiles = (cwd = process.cwd()) =>
  [
    hasPackageLock(cwd) && 'package-lock.json',
    hasYarn(cwd) && 'yarn.lock',
    hasShrinkwrap(cwd) && 'npm-shrinkwrap.json',
  ].filter(Boolean);

const hasLockfile = (cwd = process.cwd()) => lockfiles(cwd).length > 0 && true;

module.exports = hasLockfile;
module.exports.lockfiles = lockfiles;
