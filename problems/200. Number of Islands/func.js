/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const N = grid.length;
  const M = grid[0].length;

  let stack = [];
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === "1") {
        count++;
        stack.push([i, j]);
        while (stack.length) {
          let curr = stack.pop();
          const row = curr[0];
          const col = curr[1];
          grid[row][col] = "0";
          if (row < N - 1 && grid[row + 1][col] === "1") {
            stack.push([row + 1, col]);
          }
          if (row > 0 && grid[row - 1][col] === "1") {
            stack.push([row - 1, col]);
          }
          if (col < M - 1 && grid[row][col + 1] === "1") {
            stack.push([row, col + 1]);
          }
          if (col > 0 && grid[row][col - 1] === "1") {
            stack.push([row, col - 1]);
          }
        }
      }
    }
  }

  return count;
};

module.exports = {
  func: numIslands,
};
