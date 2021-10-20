const { func } = require("./func");

test("Example 1", () => {
  const s = "ab#c";
  const t = "ad#c";

  const expected = true;

  expect(func(s, t)).toEqual(expected);
});
test("Example 2", () => {
  const s = "ab##";
  const t = "c#d#";

  const expected = true;

  expect(func(s, t)).toEqual(expected);
});
test("Example 3", () => {
  const s = "a##c";
  const t = "#a#c";

  const expected = true;

  expect(func(s, t)).toEqual(expected);
});
test("Example 4", () => {
  const s = "a#c";
  const t = "b";

  const expected = false;

  expect(func(s, t)).toEqual(expected);
});
test("Example 5", () => {
  const s = "y#fo##f";
  const t = "y#f#o##f";

  const expected = true;

  expect(func(s, t)).toEqual(expected);
});
