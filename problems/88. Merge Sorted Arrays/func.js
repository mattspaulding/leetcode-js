/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n);
  let i = 0;
  let j = 0;
  while (i < m + n) {
    if (nums2[j] < nums1[i] || nums1.length == i) {
      nums1.splice(i, 0, nums2[j]);
      j++;
      i++;
    } else {
      i++;
    }
  }
  return nums1;
};

module.exports = {
  func: merge,
};
