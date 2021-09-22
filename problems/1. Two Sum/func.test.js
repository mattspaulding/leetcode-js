const { func } = require("./func");

test("Example 1", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;

  const expected = [0, 1];

  expect(func(nums, target)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [3, 2, 4];
  const target = 6;

  const expected = [1, 2];

  expect(func(nums, target)).toEqual(expected);
});
test("Example 3", () => {
  const nums = [3, 3];
  const target = 6;

  const expected = [0, 1];

  expect(func(nums, target)).toEqual(expected);
});
