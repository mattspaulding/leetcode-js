/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let map = new Map();
  let result = [];

  for (let num of nums1) {
    map.set(num);
  }

  for (let num of nums2) {
    if (map.has(num) && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
};

module.exports = {
  func: intersection,
};
