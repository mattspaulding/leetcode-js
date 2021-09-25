const { func } = require("./func");

test("Example 1", () => {
  const s = "()";

  const expected = true;

  expect(func(s)).toEqual(expected);
});
test("Example 2", () => {
  const s = "()[]{}";

  const expected = true;

  expect(func(s)).toEqual(expected);
});
test("Example 3", () => {
  const s = "(]";

  const expected = false;

  expect(func(s)).toEqual(expected);
});
test("Example 4", () => {
  const s = "([)]";

  const expected = false;

  expect(func(s)).toEqual(expected);
});
test("Example 5", () => {
  const s = "{[]}";

  const expected = true;

  expect(func(s)).toEqual(expected);
});
