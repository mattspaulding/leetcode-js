/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
function getMaxAdditionalDinersCount(N, K, M, S) {
  // Write your code here
  // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  //        [ [ x ] ] [ [  x  ]  ]  x  ]
  S = S.sort((a, b) => a - b);
  let diners = 0;

  diners += Math.floor((S[0] - 1) / (K + 1));
  for (let i = 1; i < M; i++) {
    diners += Math.floor((S[i] - S[i - 1] - 1 - K) / (K + 1));
  }
  diners += Math.floor((N - S[M - 1]) / (K + 1));
  return diners;
}

module.exports = {
  func: getMaxAdditionalDinersCount,
};
