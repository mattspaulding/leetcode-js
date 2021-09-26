/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  let map = new Map();
  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], (map.get(s1[i]) || 0) + 1);
  }

  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    let temp = s2.substring(i, i + s1.length);
    let tempMap = new Map(map);
    for (let i = 0; i < temp.length; i++) {
      if (tempMap.get(temp[i])) {
        tempMap.set(temp[i], tempMap.get(temp[i]) - 1);
      } else {
        break;
      }
      if (i == temp.length - 1) {
        return true;
      }
    }
  }
  return false;
};

module.exports = {
  func: checkInclusion,
};
