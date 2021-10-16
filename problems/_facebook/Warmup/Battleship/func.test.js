const { func } = require("./func");

test("Example 1", () => {
  const R = 2;
  const C = 3;
  const G = [
    [0, 0, 1],
    [1, 0, 1],
  ];

  const expected = 0.5;

  expect(func(R, C, G)).toEqual(expected);
});
test("Example 2", () => {
  const R = 2;
  const C = 2;
  const G = [
    [1, 1],
    [1, 1],
  ];

  const expected = 1;

  expect(func(R, C, G)).toEqual(expected);
});
