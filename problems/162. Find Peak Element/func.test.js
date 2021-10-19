const { func } = require("./func");

test("Example 1", () => {
  const nums = [1, 2, 3, 1];

  const expected = 2;

  expect(func(nums)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [1, 2, 1, 3, 5, 6, 4];

  const expected = 5;

  expect(func(nums)).toEqual(expected);
});
test("Example 3", () => {
  const nums = [11, 13, 15, 17];

  const expected = 3;

  expect(func(nums)).toEqual(expected);
});
test("Example 4", () => {
  const nums = [2, 1];

  const expected = 0;

  expect(func(nums)).toEqual(expected);
});test("Example 5", () => {
  const nums = [1];

  const expected = 0;

  expect(func(nums)).toEqual(expected);
});