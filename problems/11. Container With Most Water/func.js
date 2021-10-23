/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left <= right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = area > maxArea ? area : maxArea;
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
};

module.exports = {
  func: maxArea,
};
