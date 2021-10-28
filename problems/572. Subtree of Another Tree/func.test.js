const { func } = require("./func");

test("Example 1", () => {
  const root = {
    val: 3,
    left: {
      val: 4,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  };
  const subRoot = {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  };

  const expected = true;

  expect(func(root, subRoot)).toEqual(expected);
});
test("Example 2", () => {
  const root = {
    val: 3,
    left: {
      val: 4,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: {
          val: 0,
          left: null,
          right: null,
        },
        right: null,
      },
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  };
  const subRoot = {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  };

  const expected = false;

  expect(func(root, subRoot)).toEqual(expected);
});
