/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  s = [...s];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "#") {
      if (i == 0) {
        s.splice(i, 1);
        i = i - 1;
      } else {
        s.splice(i - 1, 2);
        i = i - 2;
      }
    }
  }
  t = [...t];
  for (let i = 0; i < t.length; i++) {
    if (t[i] == "#") {
      if (i == 0) {
        t.splice(i, 1);
        i = i - 1;
      } else {
        t.splice(i - 1, 2);
        i = i - 2;
      }
    }
  }
  if (s.join("") == t.join("")) {
    return true;
  }
  return false;
};

module.exports = {
  func: backspaceCompare,
};
