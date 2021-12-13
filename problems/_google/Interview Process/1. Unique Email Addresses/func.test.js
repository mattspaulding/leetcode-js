const { func } = require("./func");

test("Example 1", () => {
  const emails = [
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ];

  const expected = 2;

  expect(func(emails)).toEqual(expected);
});
test("Example 2", () => {
  const emails = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];

  const expected = 3;

  expect(func(emails)).toEqual(expected);
});
