/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let pivot = -1;
  let begin = -1;
  let end = -1;

  if (nums.length == 0) {
    return [-1, -1];
  }
  while (left <= right) {
    pivot = Math.floor((right - left) / 2) + left;
    if (
      nums[pivot] == target &&
      (nums[pivot - 1] != target || left == pivot || left == pivot - 1)
    ) {
      if (nums[left] == target) {
        begin = left;
      } else {
        begin = pivot;
      }
      break;
    } else if (nums[pivot] < target) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  left = 0;
  right = nums.length - 1;
  pivot = -1;

  while (left <= right) {
    pivot = Math.floor((right - left) / 2) + left;
    if (
      nums[pivot] == target &&
      (nums[pivot + 1] != target || right == pivot || right == pivot + 1)
    ) {
      if (nums[right] == target) {
        end = right;
      } else {
        end = pivot;
      }
      break;
    } else if (nums[pivot] > target) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }

  return [begin, end];
};

module.exports = {
  func: searchRange,
};
