/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target) {
      let left = 0;
      let right = matrix[i].length - 1;
      while (left <= right) {
        let pivot = left + Math.floor((right - left) / 2);
        if (matrix[i][pivot] == target) {
          return true;
        }
        if (matrix[i][pivot] < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return false;
};

module.exports = {
  func: searchMatrix,
};
