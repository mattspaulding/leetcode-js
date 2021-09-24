/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    let val = map.get(t[i]);
    if (!val || val < 0) {
      return false;
    }
    map.set(t[i], val - 1);
  }
  return true;
};

module.exports = {
  func: isAnagram,
};
