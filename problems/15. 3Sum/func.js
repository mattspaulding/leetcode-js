/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let left;
  let right;
  let map = new Map();

  let result = [];

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        if (!map.has([nums[i], nums[left], nums[right]].toString())) {
          map.set([nums[i], nums[left], nums[right]].toString());
          result.push([nums[i], nums[left], nums[right]]);
        }
        left++;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};

module.exports = {
  func: threeSum,
};
