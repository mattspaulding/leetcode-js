const { func } = require("./func");

test("Example 1", () => {
  const root = {
    val: 5,
    left: {
      val: 4,
      left: {
        val: 11,
        left: {
          val: 7,
          left: null,
          right: null,
        },
        right: {
          val: 2,
          left: null,
          right: null,
        },
      },
      right: null,
    },
    right: {
      val: 8,
      left: {
        val: 13,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: {
          val: 1,
          left: null,
          right: null,
        },
      },
    },
  };
  const targetSum = 22;

  const expected = true;

  expect(func(root, targetSum)).toEqual(expected);
});
test("Example 2", () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  };
  const targetSum = 5;

  const expected = false;

  expect(func(root, targetSum)).toEqual(expected);
});
test("Example 3", () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  };
  const targetSum = 0;

  const expected = false;

  expect(func(root, targetSum)).toEqual(expected);
});
test("Example 4", () => {
  const root = null;
  const targetSum = 1;

  const expected = false;

  expect(func(root, targetSum)).toEqual(expected);
});
