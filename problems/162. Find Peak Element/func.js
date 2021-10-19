/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let pivot;
  let left = 0;
  let right = nums.length - 1;

  while (true) {
    pivot = left + Math.floor((right - left) / 2);
    if (
      (nums[pivot] > nums[pivot - 1] || !nums[pivot - 1]) &&
      (nums[pivot] > nums[pivot + 1] || !nums[pivot + 1])
    ) {
      return pivot;
    } else if (nums[pivot] < nums[pivot - 1]) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
};

module.exports = {
  func: findPeakElement,
};
