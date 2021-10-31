/**
 * @param {number} N
 * @param {number[]} D
 * @param {number} K
 * @return {number}
 */
function getMaximumEatenDishCount(N, D, K) {
  let prev = [];
  let count = 0;
  let i = 0;
  while (D[i] != null) {
    if (!prev.includes(D[i])) {
      count++;
      prev.unshift(D[i]);
      if (prev.length > K) prev.pop();
    }
    i++;
  }
  return count;
}

module.exports = {
  func: getMaximumEatenDishCount,
};
