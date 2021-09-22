/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let considered = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (considered.has(target - nums[i])) {
      return [considered.get(target - nums[i]), i];
    }
    considered.set(nums[i],i)
  }
  throw new Error();
};

module.exports = {
  func: twoSum,
};
