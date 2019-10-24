const coinExchange = require("./coinExchange");

describe("Coin Exchange game", () => {
  it("should return 1 if N = 1 and S=[1]", () => {
    expect(coinExchange(1, [1])).toBe(1);
  });
  it("should return 2 if N = 2 and S=[1, 2]", () => {
    expect(coinExchange(5, [1, 2, 5])).toBe(4);
  });
});
