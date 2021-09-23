const { func } = require("./func");

test("Example 1", () => {
  const prices = [7,1,5,3,6,4]
  
  const expected = 5;

  expect(func(prices)).toEqual(expected);
});
test("Example 2", () => {
  const prices = [7,6,4,3,1]
  
  const expected = 0;

  expect(func(prices)).toEqual(expected);
});
