const { func } = require("./func");

test("Example 1", () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;

  const expected = [1, 2, 2, 3, 5, 6];

  expect(func(nums1, m, nums2, n)).toEqual(expected);
});
test("Example 2", () => {
  const nums1 = [1];
  const m = 1;
  const nums2 = [];
  const n = 0;

  const expected = [1];

  expect(func(nums1, m, nums2, n)).toEqual(expected);
});
test("Example 3", () => {
  const nums1 = [0];
  const m = 0;
  const nums2 = [1];
  const n = 1;

  const expected = [1];

  expect(func(nums1, m, nums2, n)).toEqual(expected);
});
