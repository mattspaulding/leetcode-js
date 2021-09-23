const { func } = require("./func");

test("Example 1", () => {
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2];

  const expected = [2, 2];

  expect(func(nums1, nums2)).toEqual(expected);
});
test("Example 2", () => {
  const nums1 = [4, 9, 5];
  const nums2 = [9, 4, 9, 8, 4];

  const expected = [4, 9];

  expect(func(nums1, nums2)).toEqual(expected);
});
test("Example 3", () => {
  const nums1 = [2, 1];
  const nums2 = [1, 2];

  const expected = [2,1];

  expect(func(nums1, nums2)).toEqual(expected);
});

