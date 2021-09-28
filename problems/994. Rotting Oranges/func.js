/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let queue = [];
  let maxTime = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  while (queue.length) {
    let node = queue.shift();
    let row = node[0];
    let col = node[1];
    let time = node[2];
    if (grid[row][col] == 1 || (grid[row][col] == 2 && time == 0)) {
      grid[row][col] = 2;
      if (row > 0) {
        queue.push([row - 1, col, time + 1]);
      }
      if (row < grid.length - 1) {
        queue.push([row + 1, col, time + 1]);
      }
      if (col > 0) {
        queue.push([row, col - 1, time + 1]);
      }
      if (col < grid[0].length - 1) {
        queue.push([row, col + 1, time + 1]);
      }
      if (time > maxTime) {
        maxTime = time;
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }
  return maxTime;
};

module.exports = {
  func: orangesRotting,
};
