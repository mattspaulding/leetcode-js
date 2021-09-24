const { func } = require("./func");

test("Example 1", () => {
  const head = [3, 2, 0, -4];

  const expected = true;

  expect(func(head)).toEqual(expected);
});
