const assert = require('node:assert/strict');
const test = require('node:test');
const { toSeconds } = require('../src/duration');

test('converts seconds and minutes to whole seconds', () => {
  assert.equal(toSeconds('90s'), 90);
  assert.equal(toSeconds('2m'), 120);
});

test('throws error on invalid format', () => {
  assert.throws(() => toSeconds('10x'), /Invalid duration format/);
});

test('throws error on unsupported unit', () => {
  assert.throws(() => toSeconds('10h'), /Invalid duration format/);
});
