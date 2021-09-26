const { func } = require("./func");

test("Example 1", () => {
  const root = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
    right: {
      val: 2,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    },
  };

  const expected = true;

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

  const expected = false;

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

  const expected = false;

  expect(func(root)).toEqual(expected);
});
test("Example 4", () => {
  const root = {
    val: 1,
    left: null,
    right: null,
  };

  const expected = true;

  expect(func(root)).toEqual(expected);
});
