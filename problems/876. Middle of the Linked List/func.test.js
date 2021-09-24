const { func } = require("./func");

test("Example 1", () => {
  const head = [1, 2, 3, 4, 5];

  const expected = [3, 4, 5];

  expect(func(head)).toEqual(expected);
});
test("Example 2", () => {
  const head = [1, 2, 3, 4, 5, 6];

  const expected = [4, 5, 6];

  expect(func(head)).toEqual(expected);
});
