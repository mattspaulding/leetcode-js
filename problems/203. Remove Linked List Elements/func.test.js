const { func } = require("./func");

test("Example 1", () => {
  const head = [1, 2, 6, 3, 4, 5, 6];
  const val = 6;

  const expected = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
  }

  expect(func(head, val)).toEqual(expected);
});
test("Example 2", () => {
  const head = [7, 7, 7, 7];
  const val = 7;

  const expected = null

  expect(func(head, val)).toEqual(expected);
});
