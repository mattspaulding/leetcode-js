const { func } = require("./func");

test("Example 1", () => {
  const nums = [4, 5, 6, 7, 0, 1, 2];
  const target = 0;

  const expected = 4;

  expect(func(nums, target)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [4, 5, 6, 7, 0, 1, 2];
  const target = 3;

  const expected = -1;

  expect(func(nums, target)).toEqual(expected);
});
test("Example 3", () => {
  const nums = [1];
  const target = 0;

  const expected = -1;

  expect(func(nums, target)).toEqual(expected);
});
test("Example 4", () => {
  const nums = [4, 5, 6, 7, 8, 1, 2, 3];
  const target = 8;

  const expected = 4;

  expect(func(nums, target)).toEqual(expected);
});
test("Example 5", () => {
  const nums = [1, 3];
  const target = 3;

  const expected = 1;

  expect(func(nums, target)).toEqual(expected);
});
test("Example 6", () => {
  const nums = [4, 5, 6, 7, 0, 1, 2];
  const target = 5;

  const expected = 1;

  expect(func(nums, target)).toEqual(expected);
});
test("Example 7", () => {
  const nums = [8, 1, 2, 3, 4, 5, 6, 7];
  const target = 6;

  const expected = 6;

  expect(func(nums, target)).toEqual(expected);
});
test("Example 8", () => {
  const nums = [8, 9, 2, 3, 4];
  const target = 9;

  const expected = 1;

  expect(func(nums, target)).toEqual(expected);
});
