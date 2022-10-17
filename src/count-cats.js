const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let count = 0;
  let pos = 0;

  arr.forEach(function(item, index, array) {
    
    for (let i = 0; i < item.length; i++) {
      pos = item.indexOf('^^', pos);

      if(pos > -1) {
        count++;
        i = pos;
      };
    }
    pos = 0;
  });

  return count;

}

module.exports = {
  countCats
};
