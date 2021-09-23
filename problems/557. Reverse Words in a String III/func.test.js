const { func } = require("./func");

test("Example 1", () => {
  const s = "Let's take LeetCode contest";

  const expected = "s'teL ekat edoCteeL tsetnoc";

  expect(func(s)).toEqual(expected);
});
test("Example 2", () => {
  const s = "God Ding";

  const expected = "doG gniD";

  expect(func(s)).toEqual(expected);
});
