/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const matR = mat.length;
  const matC = mat[0].length;
  if (matR * matC !== r * c) {
    return mat;
  }
  let result = [];
  let matI = 0;
  let matJ = 0;
  for (let i = 0; i < r; i++) {
    let row = [];
    for (let j = 0; j < c; j++) {
      row.push(mat[matI][matJ]);
      matJ++;
      if (mat[0].length == matJ) {
        matI++;
        matJ = 0;
      }
    }
    result.push(row);
  }
  return result;
};

module.exports = {
  func: matrixReshape,
};
