const { func } = require("./func");

test("Example 1", () => {
  const root = {
    val: 5,
    left: {
      val: 3,
      left: {
        val: 2,
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
      val: 6,
      left: null,
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  };
  const k = 9;

  const expected = true;

  expect(func(root, k)).toEqual(expected);
});
test("Example 2", () => {
  const root = {
    val: 5,
    left: {
      val: 3,
      left: {
        val: 2,
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
      val: 6,
      left: null,
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  };
  const k = 28;

  const expected = false;

  expect(func(root, k)).toEqual(expected);
});
test("Example 3", () => {
  const root = {
    val: 1,
    left: null,
    right: null,
  };
  const k = 2;

  const expected = false;

  expect(func(root, k)).toEqual(expected);
});
test("Example 4", () => {
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
  const k = 4;

  const expected = true;

  expect(func(root, k)).toEqual(expected);
});
test("Example 5", () => {
  const root = {
    val: 2,
    left: {
      val: 0,
      left: {
        val: -4,
        left: null,
        right: null,
      },
      right: {
        val: -1,
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
  const k = -1;

  const expected = true;

  expect(func(root, k)).toEqual(expected);
});
