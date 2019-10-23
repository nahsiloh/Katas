const bubbleSort = require("./bubbleSort");

describe("Bubble Sort", () => {
  it("should sort numbers in array in ascending order", () => {
    expect(bubbleSort([5, 1, 3, 2, 1, 0, -1])).toStrictEqual([
      -1,
      0,
      1,
      1,
      2,
      3,
      5
    ]);
  });
});
