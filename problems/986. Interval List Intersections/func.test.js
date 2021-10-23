const { func } = require("./func");

test("Example 1", () => {
  const firstList = [
    [0, 2],
    [5, 10],
    [13, 23],
    [24, 25],
  ];
  const secondList = [
    [1, 5],
    [8, 12],
    [15, 24],
    [25, 26],
  ];

  const expected = [
    [1, 2],
    [5, 5],
    [8, 10],
    [15, 23],
    [24, 24],
    [25, 25],
  ];

  expect(func(firstList, secondList)).toEqual(expected);
});
test("Example 2", () => {
  const firstList = [
    [1, 3],
    [5, 9],
  ];
  const secondList = [];

  const expected = [];

  expect(func(firstList, secondList)).toEqual(expected);
});
test("Example 3", () => {
  const firstList = [];
  const secondList = [
    [4, 8],
    [10, 12],
  ];

  const expected = [];

  expect(func(firstList, secondList)).toEqual(expected);
});
test("Example 4", () => {
  const firstList = [[1, 7]];
  const secondList = [[3, 10]];

  const expected = [[3, 7]];

  expect(func(firstList, secondList)).toEqual(expected);
});
test("Example 5", () => {
  const firstList = [
    [3, 5],
    [9, 20],
  ];
  const secondList = [
    [4, 5],
    [7, 10],
    [11, 12],
    [14, 15],
    [16, 20],
  ];

  const expected = [
    [4, 5],
    [9, 10],
    [11, 12],
    [14, 15],
    [16, 20],
  ];

  expect(func(firstList, secondList)).toEqual(expected);
});
