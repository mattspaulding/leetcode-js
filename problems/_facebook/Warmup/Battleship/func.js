/**
 * @param {number} R
 * @param {number} C
 * @param {number[][]} G
 * @return {number}
 */
function getHitProbability(R, C, G) {
  // Write your code here
  let hits = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (G[i][j] === 1) {
        hits++;
      }
    }
  }
  return hits / (R * C);
}

module.exports = {
  func: getHitProbability,
};
