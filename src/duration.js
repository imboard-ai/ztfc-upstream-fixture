const ms = require('ms');

/** Converts a human duration such as "90s" or "2m" to whole seconds. */
function toSeconds(text) {
  const millis = ms(text);
  if (typeof millis !== 'number') throw new TypeError(`Invalid duration: ${text}`);
  return Math.round(millis / 1000);
}

module.exports = { toSeconds };
