/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = [...words[i]];
    let left = 0;
    let right = word.length - 1;
    let temp;
    while (left <= right) {
      temp = word[left];
      word[left] = word[right];
      word[right] = temp;
      left++;
      right--;
    }
    result += word.join("");
    if (i < words.length - 1) {
      result += " ";
    }
  }
  return result;
};

module.exports = {
  func: reverseWords,
};
