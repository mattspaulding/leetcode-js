const { func } = require("./func");

test("Example 1", () => {
  const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ];

  const expected = [
    [1, 6],
    [8, 10],
    [15, 18],
  ];

  expect(func(intervals)).toEqual(expected);
});
test("Example 2", () => {
  const intervals = [
    [1, 4],
    [4, 5],
  ];

  const expected = [[1, 5]];

  expect(func(intervals)).toEqual(expected);
});
