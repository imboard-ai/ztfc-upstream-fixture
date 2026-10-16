const ms = require('ms');

const MS_PER_SECOND = 1000;

/** Converts a human duration such as "90s" or "2m" to whole seconds. */
function toSeconds(text) {
  const millis = ms(text);
  if (typeof millis !== 'number') throw new TypeError(`Invalid duration: ${text}`);
  return Math.round(millis / MS_PER_SECOND);
}

module.exports = { toSeconds };
