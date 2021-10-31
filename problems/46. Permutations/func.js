/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  function traverse(nums, store) {
    if (!nums.length) {
      result.push([...store]);
      return;
    }
    for (let num of nums) {
      store.push(num);
      const value = nums.filter((item) => item !== num);
      traverse(value, store);
      store.pop();
    }
  }

  traverse([...nums], []);
  return result;
};

module.exports = {
  func: permute,
};
