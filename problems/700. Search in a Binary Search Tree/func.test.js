const { func } = require("./func");

test("Example 1", () => {
  const root = {
    val: 4,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  };
  const val = 2;

  const expected = {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  };

  expect(func(root, val)).toEqual(expected);
});
