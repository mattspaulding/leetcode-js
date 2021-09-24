const { func } = require("./func");

test("Example 1", () => {
  const s = "anagram";
  const t = "nagaram";

  const expected = true;

  expect(func(s, t)).toEqual(expected);
});
test("Example 2", () => {
  const s = "rat";
  const t = "car";

  const expected = false;

  expect(func(s, t)).toEqual(expected);
});
