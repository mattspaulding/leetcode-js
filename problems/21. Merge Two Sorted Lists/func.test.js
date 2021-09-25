const { func } = require("./func");

test("Example 1", () => {
  const l1 = [1, 2, 4];
  const l2 = [1, 3, 4];

  const expected = {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 4,
              next: null,
            },
          },
        },
      },
    },
  };

  expect(func(l1, l2)).toEqual(expected);
});
