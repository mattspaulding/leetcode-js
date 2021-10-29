/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  N = board.length - 1;
  M = board[0].length - 1;

  stack = [];

  for (let i = 0; i <= M; i++) {
    if (board[0][i] == "O") {
      dfs(board, 0, i);
    }
    if (board[N][i] == "O") {
      dfs(board, N, i);
    }
  }
  for (let i = 0; i <= N; i++) {
    if (board[i][0] == "O") {
      dfs(board, i, 0);
    }
    if (board[i][M] == "O") {
      dfs(board, i, M);
    }
  }
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      if (board[i][j] != "P") {
        board[i][j] = "X";
      }
      if (board[i][j] == "P") {
        board[i][j] = "O";
      }
    }
  }
  return board;
};

function dfs(board, row, col) {
  stack.push([row, col]);
  while (stack.length) {
    const curr = stack.pop();
    const row = curr[0];
    const col = curr[1];

    board[row][col] = "P";
    if (row > 0 && board[row - 1][col] == "O") {
      stack.push([row - 1, col]);
    }
    if (row < N && board[row + 1][col] == "O") {
      stack.push([row + 1, col]);
    }
    if (col > 0 && board[row][col - 1] == "O") {
      stack.push([row, col - 1]);
    }
    if (col < M && board[row][col + 1] == "O") {
      stack.push([row, col + 1]);
    }
  }
}

module.exports = {
  func: solve,
};
