const { func } = require("./func");

test("Example 1", () => {
  const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

  const expected = 49;

  expect(func(height)).toEqual(expected);
});
test("Example 2", () => {
  const height = [1, 1];

  const expected = 1;

  expect(func(height)).toEqual(expected);
});
test("Example 3", () => {
  const height = [4, 3, 2, 1, 4];

  const expected = 16;

  expect(func(height)).toEqual(expected);
});
test("Example 4", () => {
  const height = [1, 2, 1];

  const expected = 2;

  expect(func(height)).toEqual(expected);
});
