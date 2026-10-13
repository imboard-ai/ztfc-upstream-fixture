/**
 * Converts a duration string to the total number of seconds.
 * Supported formats: number with a unit suffix 's' for seconds, 'm' for minutes.
 * Examples:
 *   '90s' => 90
 *   '2m' => 120
 *
 * @param {string} duration - The duration string.
 * @returns {number} - The total seconds.
 */
function toSeconds(duration) {
  const match = duration.match(/^([0-9]+)([sm])$/);
  if (!match) {
    throw new Error(`Invalid duration format: ${duration}`);
  }
  const value = Number(match[1]);
  const unit = match[2];
  if (unit === 's') {
    return value;
  } else if (unit === 'm') {
    return value * 60;
  }
  throw new Error(`Unsupported time unit: ${unit}`);
}

module.exports = { toSeconds };
