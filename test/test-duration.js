const assert = require('node:assert/strict');
const { toSeconds } = require('../src/duration');
const test = require('node:test');

test('converts seconds and minutes to whole seconds', () => {
  assert.equal(toSeconds('90s'), 90);
  assert.equal(toSeconds('2m'), 120);
});
