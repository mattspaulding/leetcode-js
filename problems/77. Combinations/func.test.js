const { func } = require("./func");

test("Example 1", () => {
  const n = 4;
  const k = 2;

  const expected = [
    [1, 2],
    [1, 3],
    [2, 3],
    [1, 4],
    [2, 4],
    [3, 4],
  ];

  expect(func(n, k)).toEqual(expected);
});
test("Example 2", () => {
  const n = 1;
  const k = 1;

  const expected = [[1]];

  expect(func(n, k)).toEqual(expected);
});
test("Example 3", () => {
  const n = 2;
  const k = 1;

  const expected = [[1], [2]];

  expect(func(n, k)).toEqual(expected);
});
