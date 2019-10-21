const duplicateEncode = require("./duplicateEncoder");

describe("duplicate encoder", () => {
  it("should return convert abcc to (()) ", () => {
    expect(duplicateEncode("abc")).toBe("(())");
  });
});
