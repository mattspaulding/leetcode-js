/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  let temp = nums.splice(nums.length - k, k);
  temp = temp.concat(nums);
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }
  return nums;
};

module.exports = {
  func: rotate,
};
