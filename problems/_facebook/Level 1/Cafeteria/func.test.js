const { func } = require("./func");

test("Example 1", () => {
  const N = 10;
  const K = 1;
  const M = 2;
  const S = [2, 6];

  const expected = 3;

  expect(func(N, K, M, S)).toEqual(expected);
});
test("Example 2", () => {
  const N = 15;
  const K = 2;
  const M = 3;
  const S = [11, 6, 14];

  const expected = 1;

  expect(func(N, K, M, S)).toEqual(expected);
});
