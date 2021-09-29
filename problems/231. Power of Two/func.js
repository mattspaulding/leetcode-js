/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  while (true) {
    if (n % 1 !== 0 || n < 1) return false;
    if (n === 1) return true;
    n = n / 2;
  }
};

module.exports = {
  func: isPowerOfTwo,
};
