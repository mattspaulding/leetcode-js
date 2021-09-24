const { func } = require("./func");

test("Example 1", () => {
  const s = "abcabcbb";

  const expected = 3;

  expect(func(s)).toEqual(expected);
});
test("Example 2", () => {
  const s = "bbbbb";

  const expected = 1;

  expect(func(s)).toEqual(expected);
});
test("Example 3", () => {
  const s = "pwwkew";
  const expected = 3;

  expect(func(s)).toEqual(expected);
});
test("Example 4", () => {
  const s = "";

  const expected = 0;

  expect(func(s)).toEqual(expected);
});
