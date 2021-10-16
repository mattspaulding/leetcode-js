const { func } = require("./func");

test("Example 1", () => {
  const N = 3;
  const C = "ABA";

  const expected = "BAB";

  expect(func(N, C)).toEqual(expected);
});
test("Example 1", () => {
  const N = 5;
  const C = "BBBBB";

  const expected = "AAAAA";

  expect(func(N, C)).toEqual(expected);
});
