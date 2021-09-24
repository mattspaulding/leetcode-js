/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = new Map();

  for (let i = 0; i < magazine.length; i++) {
    map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (map.get(ransomNote[i]) > 0) {
      map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
    } else {
      return false;
    }
  }

  return true;
};

module.exports = {
  func: canConstruct,
};
