const { func } = require("./func");

test("Example 1", () => {
  N = 5;
  C = "APABA";
  X = 1;
  Y = 2;

  const expected = 1;

  expect(func(N, C, X, Y)).toEqual(expected);
});
test("Example 2", () => {
  N = 5;
  C = "APABA";
  X = 2;
  Y = 3;

  const expected = 0;

  expect(func(N, C, X, Y)).toEqual(expected);
});
test("Example 3", () => {
  N = 8;
  C = ".PBAAP.B";
  X = 1;
  Y = 3;

  const expected = 3;

  expect(func(N, C, X, Y)).toEqual(expected);
});
