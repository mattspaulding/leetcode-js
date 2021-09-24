const { func } = require("./func");

test("Example 1", () => {
  const ransomNote = "a";
  const magazine = "b";

  const expected = false;

  expect(func(ransomNote, magazine)).toEqual(expected);
});
test("Example 2", () => {
  const ransomNote = "aa";
  const magazine = "ab";

  const expected = false;

  expect(func(ransomNote, magazine)).toEqual(expected);
});
test("Example 3", () => {
  const ransomNote = "aa";
  const magazine = "aab";

  const expected = true;

  expect(func(ransomNote, magazine)).toEqual(expected);
});
test("Example 4", () => {
  const ransomNote = "aab";
  const magazine = "baa";

  const expected = true;

  expect(func(ransomNote, magazine)).toEqual(expected);
});
test("Example 5", () => {
  const ransomNote = "bg";
  const magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";

  const expected = true;

  expect(func(ransomNote, magazine)).toEqual(expected);
});
