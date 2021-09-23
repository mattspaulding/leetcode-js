/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = [];
  let left = 0;
  let i = nums.length - 1;
  let right = i;
  while (i>=0) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      result[i] = nums[right] * nums[right];
      right--;
    } else {
      result[i] = nums[left] * nums[left];
      left++;
    }
    i--;
  }
  return result;
};

module.exports = {
  func: sortedSquares,
};
