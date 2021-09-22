/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let pivot;
  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    if (nums[pivot] == target) {
      return pivot;
    }
    if (nums[pivot] > target) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
  return -1;
};

module.exports = {
  func: search,
};
