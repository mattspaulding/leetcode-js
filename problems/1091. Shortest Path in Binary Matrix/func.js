/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  let queue = [];
  const N = grid.length - 1;
  const M = grid[0].length - 1;

  queue.push([0, 0, 0]);

  while (queue.length) {
    let curr = queue.shift();
    let row = curr[0];
    let col = curr[1];
    let count = curr[2];

    if (grid[row][col] === 0) {
      grid[row][col] = 1;
      if (row == M && col == N) {
        return count + 1;
      }
      if (row > 0) {
        queue.push([row - 1, col, count + 1]);
      }
      if (row < N) {
        queue.push([row + 1, col, count + 1]);
      }
      if (col > 0) {
        queue.push([row, col - 1, count + 1]);
      }
      if (col < M) {
        queue.push([row, col + 1, count + 1]);
      }
      if (row > 0 && col > 0) {
        queue.push([row - 1, col - 1, count + 1]);
      }
      if (row < M && col > 0) {
        queue.push([row + 1, col - 1, count + 1]);
      }
      if (row > 0 && col < M) {
        queue.push([row - 1, col + 1, count + 1]);
      }
      if (row < N && col < M) {
        queue.push([row + 1, col + 1, count + 1]);
      }
    }
  }

  return -1;
};

module.exports = {
  func: shortestPathBinaryMatrix,
};
