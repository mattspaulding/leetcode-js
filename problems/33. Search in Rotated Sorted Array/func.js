/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) {
    return -1;
  }
  // Find the rotation point
  let pivot = -1;
  let left = 0;
  let right = nums.length - 1;

  while (true) {
    if (left > right) {
      left = 0;
      right = nums.length - 1;
      break;
    }
    pivot = Math.floor((right - left) / 2) + left;
    if (nums[pivot] < nums[pivot - 1]) {
      // Determine which side possibly contains the target
      if (target >= nums[0]) {
        right = pivot - 1;
        left = 0;
      } else {
        left = pivot;
        right = nums.length - 1;
      }
      break;
    } else if (nums[pivot] < nums[0]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }

  // Search the subarray for the target
  pivot = -1;
  while (left <= right) {
    pivot = Math.floor((right - left) / 2) + left;
    if (nums[pivot] == target) {
      return pivot;
    } else if (target < nums[pivot]) {
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
