const { func } = require("./func");

test("Example 1", () => {
  const head = [1, 2, 3, 4, 5];
  const n = 2;

  const expected = [1, 2, 3, 5];

  expect(func(head, n)).toEqual(expected);
});
test("Example 2", () => {
  const head = [1];
  const n = 1;

  const expected = [];

  expect(func(head, n)).toEqual(expected);
});
test("Example 3", () => {
  const head = [1, 2];
  const n = 1;

  const expected = [1];

  expect(func(head, n)).toEqual(expected);
});
test("Example 4", () => {
  const head = [1, 2];
  const n = 2;

  const expected = [2];

  expect(func(head, n)).toEqual(expected);
});
