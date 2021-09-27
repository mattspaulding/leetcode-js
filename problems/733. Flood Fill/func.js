/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let stack = [];
  stack.push([sr, sc]);
  const originalColor = image[sr][sc];
  if(newColor==originalColor){
    return image;
  }

  while (stack.length) {
    let node = stack.pop();
    let r = node[0];
    let c = node[1];
    if (image[r][c] == originalColor) {
      image[r][c] = newColor;
      if (r > 0) {
        stack.push([r - 1, c]);
      }
      if (r < image.length - 1) {
        stack.push([r + 1, c]);
      }
      if (c > 0) {
        stack.push([r, c - 1]);
      }
      if (c < image[0].length - 1) {
        stack.push([r, c + 1]);
      }
    }
  }
  return image;
};

module.exports = {
  func: floodFill,
};
