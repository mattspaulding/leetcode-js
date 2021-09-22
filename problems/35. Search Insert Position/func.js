/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;
  let pivot = -1;
  let insert = -1;
  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    if (nums[pivot] == target) {
      return pivot;
    }
    if (nums[pivot] < target) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
      insert = pivot;
    }
  }
  return insert;
};

module.exports = {
  func: searchInsert,
};
