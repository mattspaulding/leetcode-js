const { func } = require("./func");

test("Example 1", () => {
  const s = "leetcode";
  const expected = 0;

  expect(func(s)).toEqual(expected);
});
test("Example 2", () => {
  const s = "loveleetcode";

  const expected = 2;

  expect(func(s)).toEqual(expected);
});
test("Example 3", () => {
  const s = "aabb";

  const expected = -1;

  expect(func(s)).toEqual(expected);
});
