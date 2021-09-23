const { func } = require("./func");

test("Example 1", () => {
  const mat = [
    [1, 2],
    [3, 4],
  ];
  const r = 1;
  const c = 4;

  const expected = [[1, 2, 3, 4]];

  expect(func(mat, r, c)).toEqual(expected);
});
test("Example 2", () => {
  const mat = [
    [1, 2],
    [3, 4],
  ];
  const r = 2;
  const c = 4;

  const expected = [
    [1, 2],
    [3, 4],
  ];

  expect(func(mat, r, c)).toEqual(expected);
});
