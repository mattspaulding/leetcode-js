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
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 9,
        left: null,
        right: null,
      },
    },
  };

  const expected = {
    val: 4,
    left: {
      val: 7,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 6,
        left: null,
        right: null,
      },
    },
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  };

  expect(func(root)).toEqual(expected);
});
test("Example 2", () => {
  const root = {
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

  const expected = {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 1,
      left: null,
      right: null,
    },
  };

  expect(func(root)).toEqual(expected);
});
test("Example 3", () => {
  const root = null;

  const expected = null;

  expect(func(root)).toEqual(expected);
});
