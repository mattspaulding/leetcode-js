const { func } = require("./func");

test("Example 1", () => {
  const n = 1;

  const expected = true;

  expect(func(n)).toEqual(expected);
});
test("Example 2", () => {
  const n = 16;

  const expected = true;

  expect(func(n)).toEqual(expected);
});
test("Example 3", () => {
  const n = 3;

  const expected = false;

  expect(func(n)).toEqual(expected);
});
test("Example 4", () => {
  const n = 4;

  const expected = true;

  expect(func(n)).toEqual(expected);
});
test("Example 5", () => {
  const n = 5;

  const expected = false;

  expect(func(n)).toEqual(expected);
});
