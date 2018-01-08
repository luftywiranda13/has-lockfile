'use strict';

const hasPackageLock = require('has-package-lock');
const hasShrinkwrap = require('has-shrinkwrap');
const hasYarn = require('has-yarn');

const hasLockfile = (cwd = process.cwd()) => {
  return Array.of(
    hasPackageLock(cwd) && 'package-lock.json',
    hasYarn(cwd) && 'yarn.lock',
    hasShrinkwrap(cwd) && 'npm-shrinkwrap.json'
  ).filter(Boolean);
};

module.exports = hasLockfile;
