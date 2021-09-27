/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let stack = [];
  let maxSize = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        stack.push([i, j]);

        let size = 0;

        while (stack.length) {
          let node = stack.pop();
          let r = node[0];
          let c = node[1];
          if (grid[r][c] == 1) {
            grid[r][c] = -1;
            size++;
            if (r > 0) {
              stack.push([r - 1, c]);
            }
            if (r < grid.length - 1) {
              stack.push([r + 1, c]);
            }
            if (c > 0) {
              stack.push([r, c - 1]);
            }
            if (c < grid[0].length - 1) {
              stack.push([r, c + 1]);
            }
          }
        }
        if (size > maxSize) {
          maxSize = size;
        }
      }
    }
  }
  return maxSize;
};

module.exports = {
  func: maxAreaOfIsland,
};
