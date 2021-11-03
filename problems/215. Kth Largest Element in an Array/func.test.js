const { func } = require("./func");

test("Example 1", () => {
  const nums = [3, 2, 1, 5, 6, 4];
  const k = 2;

  const expected = 5;

  expect(func(nums, k)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
  const k = 4;

  const expected = 4;

  expect(func(nums, k)).toEqual(expected);
});
test("Example 3", () => {
  const nums = [3,3,3,3,4,3,3,3,3]
  const k = 5;

  const expected = 3;

  expect(func(nums, k)).toEqual(expected);
});
