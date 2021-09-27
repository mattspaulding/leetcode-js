const { func } = require("./func");

test("Example 1", () => {
  const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ];
  const sr = 1;
  const sc = 1;
  const newColor = 2;

  const expected = [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ];

  expect(func(image, sr, sc, newColor)).toEqual(expected);
});
test("Example 2", () => {
  const image = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  const sr = 0;
  const sc = 0;
  const newColor = 2;

  const expected = [
    [2, 2, 2],
    [2, 2, 2],
  ];

  expect(func(image, sr, sc, newColor)).toEqual(expected);
});
test("Example 3", () => {
  const image = [
    [0, 0, 0],
    [0, 1, 1],
  ];
  const sr = 1;
  const sc = 1;
  const newColor = 1;

  const expected = [
    [0, 0, 0],
    [0, 1, 1],
  ];

  expect(func(image, sr, sc, newColor)).toEqual(expected);
});
