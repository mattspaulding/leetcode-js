/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let queue = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] == 0) {
        queue.push([i, j, 0]);
      } else {
        mat[i][j] = -1;
      }
    }
  }
  while (queue.length) {
    let node = queue.shift();
    let row = node[0];
    let col = node[1];
    let level = node[2];
    if (mat[row][col] == -1 || level == 0) {
      mat[row][col] = level;
      if (row > 0) {
        queue.push([row - 1, col, level + 1]);
      }
      if (row < mat.length - 1) {
        queue.push([row + 1, col, level + 1]);
      }
      if (col > 0) {
        queue.push([row, col - 1, level + 1]);
      }
      if (col < mat[0].length - 1) {
        queue.push([row, col + 1, level + 1]);
      }
    }
  }
  return mat;
};

module.exports = {
  func: updateMatrix,
};
