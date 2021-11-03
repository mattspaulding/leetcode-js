/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let largest = [];
  largest.push(nums[0]);
  for (let n = 1; n < nums.length; n++) {
    for (let i = 0; i < largest.length; i++) {
      if (
        (nums[n] > largest[i - 1] || largest[i - 1] == null) &&
        nums[n] <= largest[i]
      ) {
        largest.splice(i, 0, nums[n]);
        break;
      }
      if (i == largest.length - 1) {
        largest.push(nums[n]);
        break;
      }
    }

    if (largest.length > k) {
      largest.shift();
    }
  }
  return largest[0];
};

module.exports = {
  func: findKthLargest,
};
