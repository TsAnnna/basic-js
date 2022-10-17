const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  let activity = Number(sampleActivity);
  if (activity <= 0 || typeof sampleActivity !== 'string' || activity >= 15) {
    return false;
  }
  if (typeof sampleActivity !== 'number' && isNaN(sampleActivity)) {
   return false;
  }
  let A = Math.log(MODERN_ACTIVITY/activity);
  let K = 0.693/HALF_LIFE_PERIOD;
  return Math.ceil(A/K);
}

module.exports = {
  dateSample
};
