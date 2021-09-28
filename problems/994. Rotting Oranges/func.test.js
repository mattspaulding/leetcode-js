const { func } = require("./func");

test("Example 1", () => {
  const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ];

  const expected = 4;

  expect(func(grid)).toEqual(expected);
});
test("Example 2", () => {
  const grid = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ];

  const expected = -1;

  expect(func(grid)).toEqual(expected);
});
test("Example 3", () => {
  const grid = [[0, 2]];

  const expected = 0;

  expect(func(grid)).toEqual(expected);
});
test("Example 4", () => {
  const grid = [
    [2, 1, 1],
    [1, 1, 1],
    [0, 1, 2],
  ];

  const expected = 2;

  expect(func(grid)).toEqual(expected);
});
