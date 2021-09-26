const { func } = require("./func");

test("Example 1", () => {
  const root = {
    val: 3,
    left: {
      val: 9,
      left: null,
      right: null,
    },
    right: {
      val: 20,
      left: {
        val: 15,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  };

  const expected = [[3], [9, 20], [15, 7]];

  expect(func(root)).toEqual(expected);
});
test("Example 2", () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  };

  const expected = [[1], [2, 3], [4, 5]];

  expect(func(root)).toEqual(expected);
});
test("Example 3", () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: null,
      },
    },
    right: {
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: null,
      },
    },
  };

  const expected = [[1], [2, 2], [3, 3]];

  expect(func(root)).toEqual(expected);
});
test("Example 4", () => {
  const root = {
    val: 1,
    left: null,
    right: null,
  };

  const expected = [[1]];

  expect(func(root)).toEqual(expected);
});
