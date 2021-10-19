/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let pivot = -1;
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] <= nums[right]) {
    return nums[0];
  }

  if (nums.length == 2) {
    if (nums[left] < nums[right]) {
      return nums[left];
    } else {
      return nums[right];
    }
  }

  while (true) {
    pivot = Math.floor((right - left) / 2) + left;
    if (nums[pivot] < nums[pivot - 1]) {
      return nums[pivot];
    } else if (nums[pivot] >= nums[0]) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
};

module.exports = {
  func: findMin,
};
