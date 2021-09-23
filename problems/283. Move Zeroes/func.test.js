const { func } = require("./func");

test("Example 1", () => {
  const nums = [0, 1, 0, 3, 12];

  const expected = [1, 3, 12, 0, 0];

  expect(func(nums)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [0];

  const expected = [0];

  expect(func(nums)).toEqual(expected);
});
test("Example 3", () => {
  const nums = [0, 0, 1];

  const expected = [1, 0, 0];

  expect(func(nums)).toEqual(expected);
});
