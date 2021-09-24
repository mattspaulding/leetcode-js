const { func } = require("./func");

test("Example 1", () => {
  const numRows = 5;

  const expected = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

  expect(func(numRows)).toEqual(expected);
});
test("Example 2", () => {
  const numRows = 1;

  const expected = [[1]];

  expect(func(numRows)).toEqual(expected);
});
