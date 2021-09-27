const { func } = require("./func");

test("Example 1", () => {
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
      left: {
        val: 6,
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

  const expected = {
    left: {
      left: {
        left: null,
        next: {
          left: null,
          next: {
            left: null,
            next: { left: null, next: null, right: null, val: 7 },
            right: null,
            val: 6,
          },
          right: null,
          val: 5,
        },
        right: null,
        val: 4,
      },
      next: {
        left: {
          left: null,
          next: { left: null, next: null, right: null, val: 7 },
          right: null,
          val: 6,
        },
        next: null,
        right: { left: null, next: null, right: null, val: 7 },
        val: 3,
      },
      right: {
        left: null,
        next: {
          left: null,
          next: { left: null, next: null, right: null, val: 7 },
          right: null,
          val: 6,
        },
        right: null,
        val: 5,
      },
      val: 2,
    },
    next: null,
    right: {
      left: {
        left: null,
        next: { left: null, next: null, right: null, val: 7 },
        right: null,
        val: 6,
      },
      next: null,
      right: { left: null, next: null, right: null, val: 7 },
      val: 3,
    },
    val: 1,
  };
  expect(func(root)).toEqual(expected);
});
