const { func } = require("./func");

test("Example 1", () => {
  const nums = [1, 3, 5, 6];
  const target = 5;

  const expected = 2;

  expect(func(nums, target)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [1, 3, 5, 6];
  const target = 2;

  const expected = 1;

  expect(func(nums, target)).toEqual(expected);
});
test("Example 3", () => {
  const nums = [1, 3, 5, 6];
  const target = 7;

  const expected = 4;

  expect(func(nums, target)).toEqual(expected);
});
test("Example 4", () => {
  const nums = [1, 3, 5, 6];
  const target = 0;

  const expected = 0;

  expect(func(nums, target)).toEqual(expected);
});
test("Example 5", () => {
  const nums = [1];
  const target = 0;

  const expected = 0;

  expect(func(nums, target)).toEqual(expected);
});
