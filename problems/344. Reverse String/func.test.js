const { func } = require("./func");

test("Example 1", () => {
  const s = ["h", "e", "l", "l", "o"];

  const expected = ["o", "l", "l", "e", "h"];

  expect(func(s)).toEqual(expected);
});
test("Example 2", () => {
  const s = ["H", "a", "n", "n", "a", "h"];

  const expected = ["h", "a", "n", "n", "a", "H"];

  expect(func(s)).toEqual(expected);
});
