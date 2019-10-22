const duplicateEncode = require("../duplicate");

describe("duplicate encoder", () => {
  it("should return convert abcc to (()) ", () => {
    expect(duplicateEncode("abc")).toBe("(())");
  });
});
