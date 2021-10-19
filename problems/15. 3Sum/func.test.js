const { func } = require("./func");

test("Example 1", () => {
  const nums = [-1, 0, 1, 2, -1, -4];

  const expected = [
    [-1, -1, 2],
    [-1, 0, 1],
  ];

  expect(func(nums)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [];

  const expected = [];

  expect(func(nums)).toEqual(expected);
});
test("Example 3", () => {
  const nums = [0];

  const expected = [];

  expect(func(nums)).toEqual(expected);
});
test("Example 4", () => {
  const nums = [-2, 0, 1, 1, 2];

  const expected = [
    [-2, 0, 2],
    [-2, 1, 1],
  ];

  expect(func(nums)).toEqual(expected);
});
