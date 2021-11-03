const { func } = require("./func");

test("Example 1", () => {
  const root = {
    val: 3,
    left: {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: {
          val: 7,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: null,
        },
      },
    },
    right: {
      val: 1,
      left: {
        val: 0,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  };
  const p = 5;
  const q = 1;

  const expected = 3;

  expect(func(root, p, q)).toEqual(expected);
});
test("Example 2", () => {
  const root = {
    val: 3,
    left: {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: {
          val: 7,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: null,
        },
      },
    },
    right: {
      val: 1,
      left: {
        val: 0,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  };
  const p = 5;
  const q = 4;

  const expected = 5;

  expect(func(root, p, q)).toEqual(expected);
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
  const p = 1;
  const q = 2;

  const expected = 1;

  expect(func(root, p, q)).toEqual(expected);
});
