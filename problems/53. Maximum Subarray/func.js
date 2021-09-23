/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let current = nums[0];
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    current = Math.max(num, current + num);
    largest = Math.max(largest, current);
  }
  return largest;
};

module.exports = {
  func: maxSubArray,
};
