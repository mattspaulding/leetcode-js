const { func } = require("./func");

test("Example 1", () => {
  const numbers = [2, 7, 11, 15];
  const target = 9;

  const expected = [1, 2];

  expect(func(numbers, target)).toEqual(expected);
});
test("Example 2", () => {
  const numbers = [2, 3, 4];
  const target = 6;

  const expected = [1, 3];

  expect(func(numbers, target)).toEqual(expected);
});
test("Example 3", () => {
  const numbers = [-1, 0];
  const target = -1;

  const expected = [1, 2];

  expect(func(numbers, target)).toEqual(expected);
});
