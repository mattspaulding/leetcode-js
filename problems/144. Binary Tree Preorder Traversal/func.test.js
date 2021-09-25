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
      },
    },
  };

  const expected = [1, 2, 3];

  expect(func(root)).toEqual(expected);
});
