const { func } = require("./func");

test("Example 1", () => {
  // [1,null,2,3]
  const root = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  };

  const expected = [1, 2, 3];

  expect(func(root)).toEqual(expected);
});
