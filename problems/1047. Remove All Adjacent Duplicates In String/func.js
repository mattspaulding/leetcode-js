/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  s = [...s];
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  let res = "";
  for (let q of stack) {
    res += q;
  }
  return res;
};

module.exports = {
  func: removeDuplicates,
};
