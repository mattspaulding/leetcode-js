/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], (map.get(nums2[i]) || 0) + 1);
  }
  for (let i = 0; i < nums1.length; i++) {
    if (map.get(nums1[i])) {
      result.push(nums1[i]);
      map.set(nums1[i], map.get(nums1[i]) - 1);
    }
  }
  return result;
};

module.exports = {
  func: intersect,
};
