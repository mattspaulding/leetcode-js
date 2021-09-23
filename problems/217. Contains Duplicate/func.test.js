const { func } = require("./func");

test("Example 1", () => {
  const nums = [1, 2, 3, 1];

  const expected = true;

  expect(func(nums)).toBe(expected);
});
test("Example 2", () => {
  const nums = [1, 2, 3, 4];

  const expected = false;

  expect(func(nums)).toBe(expected);
});
test("Example 3", () => {
  const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

  const expected = true;

  expect(func(nums)).toBe(expected);
});
