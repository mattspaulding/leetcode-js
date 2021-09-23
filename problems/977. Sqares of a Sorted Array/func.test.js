const { func } = require("./func");

test("Example 1", () => {
  const nums = [-4, -1, 0, 3, 10];

  const expected = [0, 1, 9, 16, 100];

  expect(func(nums)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [-7, -3, 2, 3, 11];

  const expected = [4, 9, 9, 49, 121];

  expect(func(nums)).toEqual(expected);
});
