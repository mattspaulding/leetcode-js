const { func } = require("./func");

test("Example 1", () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

  const expected = 6;

  expect(func(nums)).toBe(expected);
});
test("Example 2", () => {
  const nums = [1];

  const expected = 1;

  expect(func(nums)).toBe(expected);
});
test("Example 3", () => {
  const nums = [5, 4, -1, 7, 8];

  const expected = 23;

  expect(func(nums)).toBe(expected);
});
