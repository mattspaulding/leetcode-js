const { func } = require("./func");

test("Example 1", () => {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;

  const expected = [5, 6, 7, 1, 2, 3, 4];

  expect(func(nums, k)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [-1, -100, 3, 99];
  const k = 2;

  const expected = [3, 99, -1, -100];

  expect(func(nums, k)).toEqual(expected);
});
test("Example 3", () => {
  const nums = [1, 2];
  const k = 5;

  const expected = [2, 1];

  expect(func(nums, k)).toEqual(expected);
});
