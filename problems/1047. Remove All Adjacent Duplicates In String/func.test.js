const { func } = require("./func");

test("Example 1", () => {
  const s = "abbaca";

  const expected = "ca";

  expect(func(s)).toEqual(expected);
});
test("Example 2", () => {
  const s = "azxxzy";

  const expected = "ay";

  expect(func(s)).toEqual(expected);
});
