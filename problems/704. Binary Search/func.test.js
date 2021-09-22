const { func } = require("./func");

test("Example 1", () => {
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;

  const expected = 4;

  expect(func(nums, target)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 2;

  const expected = -1;

  expect(func(nums, target)).toEqual(expected);
});
