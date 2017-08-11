import test from 'ava';

import m from './';

test(t => {
  t.is(m('fixtures/bar'), 'package-lock.json');
  t.is(m('fixtures/baz'), null);
  t.is(m('fixtures/foo'), 'yarn.lock');
  t.is(m(), null);
});
