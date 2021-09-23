/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let prev = null;

  nums = nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === prev) {
      return true;
    }
    prev = nums[i];
  }
  return false;
};

module.exports = {
  func: containsDuplicate,
};
