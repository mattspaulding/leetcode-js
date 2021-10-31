/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let map = new Map();
  const result = [];

  function traverse(nums, store) {
    if (!nums.length) {
      if (!map.has(JSON.stringify(store))) {
        result.push([...store]);
      }
      map.set(JSON.stringify(store));
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      store.push(nums[i]);
      const value = [...nums];
      value.splice(i, 1);
      traverse(value, store);
      store.pop();
    }
  }

  traverse([...nums], []);
  return result;
};

module.exports = {
  func: permuteUnique,
};
