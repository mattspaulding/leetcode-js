const { func } = require("./func");

test("Example 1", () => {
  const nums = [5, 7, 7, 8, 8, 10];
  const target = 8;

  const expected = [3, 4];

  expect(func(nums, target)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [5, 7, 7, 8, 8, 10];
  const target = 6;

  const expected = [-1, -1];

  expect(func(nums, target)).toEqual(expected);
});
test("Example 3", () => {
  const nums = [];
  const target = 0;

  const expected = [-1, -1];

  expect(func(nums, target)).toEqual(expected);
});
test("Example 4", () => {
  const nums = [1, 2, 3];
  const target = 3;

  const expected = [2, 2];

  expect(func(nums, target)).toEqual(expected);
});
test("Example 5", () => {
  const nums = [2, 2];
  const target = 1;

  const expected = [-1, -1];

  expect(func(nums, target)).toEqual(expected);
});
test("Example 6", () => {
  const nums = [1, 2, 3, 3, 3, 3, 4, 5, 9];
  const target = 3;

  const expected = [2, 5];

  expect(func(nums, target)).toEqual(expected);
});
