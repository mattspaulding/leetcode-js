/**
 * @param {number} N
 * @param {string} C
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
function getArtisticPhotographCount(N, C, X, Y) {
  // Write your code here
  C = [...C];
  let main = 0;
  let count = 0;

  while (main < N) {
    if (C[main] == "P") {
      for (let i = main + X; i <= main + Y; i++) {
        if (C[i] == "A") {
          for (let j = i + X; j <= i + Y; j++) {
            if (C[j] == "B") {
              count++;
            }
          }
        }
      }
    }
    if (C[main] == "B") {
      for (let i = main + X; i <= main + Y; i++) {
        if (C[i] == "A") {
          for (let j = i + X; j <= i + Y; j++) {
            if (C[j] == "P") {
              count++;
            }
          }
        }
      }
    }
    main++;
  }

  return count;
}

module.exports = {
  func: getArtisticPhotographCount,
};
