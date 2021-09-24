/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];

    if (i == 0) {
      row.push(1);
    } else if (i == 1) {
      row.push(1);
      row.push(1);
    } else {
      row.push(1);
      for (let j = 0; j < Math.floor(i / 2); j++) {
        row.push(result[i - 1][j] + result[i - 1][j + 1]);
      }
      let start = row.length - 2;
      if (i % 2) {
        start = row.length - 1;
      }
      for (let j = start; j >= 0; j--) {
        row.push(row[j]);
      }
    }
    result.push(row);
  }
  return result;
};

module.exports = {
  func: generate,
};
