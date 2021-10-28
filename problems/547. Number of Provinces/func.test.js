const { func } = require("./func");

test("Example 1", () => {
  const isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ];

  const expected = 2;

  expect(func(isConnected)).toEqual(expected);
});
test("Example 2", () => {
  const isConnected = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  const expected = 3;

  expect(func(isConnected)).toEqual(expected);
});
test("Example 3", () => {
  const isConnected = [
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
  ];

  const expected = 1;

  expect(func(isConnected)).toEqual(expected);
});
