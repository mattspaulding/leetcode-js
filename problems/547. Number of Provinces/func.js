/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const N = isConnected.length;
  let count = 0;

  for (let i = 0; i < N; i++) {
    const stack = [i];
    let found = false;

    while (stack.length > 0) {
      let x = stack.pop();

      for (let j = 0; j < N; j++) {
        if (isConnected[x][j]) {
          found = true;
          isConnected[x][j] = 0;
          if (j !== x) stack.push(j);
        }
      }
    }

    if (found) count++;
  }

  return count;
};

module.exports = {
  func: findCircleNum,
};
