const { func } = require("./func");

test("Example 1", () => {
  const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

  const expected = 1

  expect(func(grid)).toEqual(expected);
});
test("Example 2", () => {
  const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]

  const expected = 3

  expect(func(grid)).toEqual(expected);
});
