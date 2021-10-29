const { func } = require("./func");

test("Example 1", () => {
  const board = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ];

  const expected = [
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
    ["X", "X", "X", "X"],
    ["X", "O", "X", "X"],
  ];

  expect(func(board)).toEqual(expected);
});
test("Example 2", () => {
  const board = [["X"]];

  const expected = [["X"]];

  expect(func(board)).toEqual(expected);
});
test("Example 3", () => {
  const board = [
    ["O", "O", "O"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ];

  const expected = [
    ["O", "O", "O"],
    ["O", "O", "O"],
    ["O", "O", "O"],
  ];

  expect(func(board)).toEqual(expected);
});
test("Example 4", () => {
  const board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
  ];

  const expected = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
  ];

  expect(func(board)).toEqual(expected);
});
test("Example 5", () => {
  const board = [
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
  ];

  const expected = [
    ["X", "O", "X", "O", "X", "O"],
    ["O", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "O"],
    ["O", "X", "O", "X", "O", "X"],
  ];

  expect(func(board)).toEqual(expected);
});
