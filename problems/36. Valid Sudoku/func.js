/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      row.push(board[i][j]);
    }
    row.sort();
    for (let j = 0; j < 9; j++) {
      if (row[j] !== "." && row[j] == row[j + 1]) {
        return false;
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      row.push(board[j][i]);
    }
    row.sort();
    for (let j = 0; j < 9; j++) {
      if (row[j] !== "." && row[j] == row[j + 1]) {
        return false;
      }
    }
  }
  let r = 0;
  let c = 0;
  while (r < 7) {
    while (c < 7) {
      let row = [];
      for (let i = r; i < r + 3; i++) {
        for (let j = c; j < c + 3; j++) {
          row.push(board[i][j]);
        }
      }
      row.sort();
      for (let j = 0; j < 9; j++) {
        if (row[j] !== "." && row[j] == row[j + 1]) {
          return false;
        }
      }
      c = c + 3;
    }
    r = r + 3;
    c = 0;
  }
  return true;
};

module.exports = {
  func: isValidSudoku,
};
