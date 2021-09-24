/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], 0);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) == 0) {
      return i;
    }
  }
  return -1;
};

module.exports = {
  func: firstUniqChar,
};
