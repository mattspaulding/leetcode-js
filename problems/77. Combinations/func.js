/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let nums = [];
  for (let i = 1; i < k + 1; ++i) nums.push(i);
  nums.push(n + 1);

  let output = [];
  let j = 0;
  while (j < k) {
    output.push(nums.slice(0, k));
    j = 0;
    while (j < k && nums[j + 1] == nums[j] + 1) {
      nums[j] = j++ + 1;
    }
    nums[j] = nums[j] + 1;
  }
  return output;
};

module.exports = {
  func: combine,
};
