const { func } = require("./func");

test("Example 1", () => {
  const nums = [1, 1, 2];

  const expected = [
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
  ];

  expect(func(nums)).toEqual(expected);
});
test("Example 2", () => {
  const nums = [1, 2, 3];

  const expected = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ];

  expect(func(nums)).toEqual(expected);
});
