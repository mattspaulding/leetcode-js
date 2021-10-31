const { func } = require("./func");

test("Example 1", () => {
  N = 6;
  D = [1, 2, 3, 3, 2, 1];
  K = 1;

  const expected = 5;

  expect(func(N, D, K)).toEqual(expected);
});
test("Example 2", () => {
  N = 6;
  D = [1, 2, 3, 3, 2, 1];
  K = 2;

  const expected = 4;

  expect(func(N, D, K)).toEqual(expected);
});
test("Example 3", () => {
  N = 7;
  D = [1, 2, 1, 2, 1, 2, 1];
  K = 2;

  const expected = 2;

  expect(func(N, D, K)).toEqual(expected);
});
