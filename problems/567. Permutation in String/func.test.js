const { func } = require("./func");

test("Example 1", () => {
  const s1 = "ab";
  const s2 = "eidbaooo";

  const expected = true;

  expect(func(s1, s2)).toEqual(expected);
});
test("Example 2", () => {
  const s1 = "ab";
  const s2 = "eidboaoo";

  const expected = false;

  expect(func(s1, s2)).toEqual(expected);
});
test("Example 3", () => {
  const s1 = "adc";
  const s2 = "dcda";

  const expected = true;

  expect(func(s1, s2)).toEqual(expected);
});
test("Example 4", () => {
  const s1 = "abcdxabcde";
  const s2 = "abcdeabcdx";

  const expected = true;

  expect(func(s1, s2)).toEqual(expected);
});
