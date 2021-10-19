const { func } = require("./func");

test("Example 1", () => {
  const nums = [3, 4, 5, 1, 2];

  const expected = 1;

  expect(func(nums)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [4, 5, 6, 7, 0, 1, 2];

  const expected = 0;

  expect(func(nums)).toEqual(expected);
});
test("Example 3", () => {
  const nums = [11, 13, 15, 17];

  const expected = 11;

  expect(func(nums)).toEqual(expected);
});
test("Example 4", () => {
  const nums = [2, 1];

  const expected = 1;

  expect(func(nums)).toEqual(expected);
});
test("Example 5", () => {
  const nums = [5, 1, 2, 3, 4];

  const expected = 1;

  expect(func(nums)).toEqual(expected);
});
