const { func } = require("./func");

test("Example 1", () => {
  const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 4,
              next: {
                val: 5,
                next: null,
              },
            },
          },
        },
      },
    },
  };

  const expected = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 5,
        next: null,
      },
    },
  };

  expect(func(head)).toEqual(expected);
});
test("Example 2", () => {
  const head = {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: null,
          },
        },
      },
    },
  };

  const expected = {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  };

  expect(func(head)).toEqual(expected);
});
