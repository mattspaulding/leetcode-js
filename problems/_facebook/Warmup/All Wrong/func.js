/**
 * @param {number} N
 * @param {string} C
 * @return {string}
 */
function getWrongAnswers(N, C) {
  // Write your code here
  C = [...C];
  for (let i = 0; i < N; i++) {
    if (C[i] === "A") {
      C[i] = "B";
    } else {
      C[i] = "A";
    }
  }
  return C.join("");
}

module.exports = {
  func: getWrongAnswers,
};
