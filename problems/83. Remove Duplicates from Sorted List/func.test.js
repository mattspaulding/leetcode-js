const { func } = require("./func");

test("Example 1", () => {
  const head = [1, 1, 2];

  const expected = {
    val: 1,
    next: {
      val: 2,
      next: null,
    },
  };

  expect(func(head)).toEqual(expected);
});
test("Example 2", () => {
  const head = [1, 1, 1];

  const expected = {
    val: 1,
    next: null,
  };

  expect(func(head)).toEqual(expected);
});
