const { func } = require("./func");

test("Example 1", () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  const target = 3;

  const expected = true;

  expect(func(matrix, target)).toEqual(expected);
});
test("Example 2", () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  const target = 13;

  const expected = false;

  expect(func(matrix, target)).toEqual(expected);
});
test("Example 3", () => {
  const matrix = [[1, 3]];
  const target = 3;

  const expected = true;

  expect(func(matrix, target)).toEqual(expected);
});
