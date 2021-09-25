const { func } = require("./func");

test("Example 1", () => {
  const head = [1, 2, 3, 4, 5];

  const expected = {
    val: 5,
    next: {
      val: 4,
      next: {
        val: 3,
        next: {
          val: 2,
          next: {
            val: 1,
            next: null,
          },
        },
      },
    },
  };

  expect(func(head)).toEqual(expected);
});
