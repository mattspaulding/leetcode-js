/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  let bestLen = 0;
  let j = 1;
  let map = new Map();
  map.set(s[0], true);
  for (let i = 0; i < s.length; i++) {
    while (s[j] != null) {
      if (map.get(s[j])) {
        map.set(s[i], false);
        break;
      }
      map.set(s[j], true);
      if (j - i > bestLen) {
        bestLen = j - i;
      }
      j++;
    }
  }
  return bestLen + 1;
};

module.exports = {
  func: lengthOfLongestSubstring,
};
