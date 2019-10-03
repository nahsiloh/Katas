const whoLikesIt = require("./whoLikesIt");

describe("who likes it", () => {
  describe("when no name is passed in the", () => {
    it("should return no one likes this", () => {
      expect(whoLikesIt([])).toBe("no one likes this");
    });
  });

  describe("when 1 name is passed in the array", () => {
    it("should return John likes this", () => {
      expect(whoLikesIt(["John"])).toBe("John likes this");
    });
  });

  describe("when 2 names are passed in the array", () => {
    it("should return Peter and John like this", () => {
      expect(whoLikesIt(["Peter", "John"])).toBe("Peter and John like this");
    });
  });

  describe("when 3 names are passed in the array", () => {
    it("should return Peter, Max and John like this", () => {
      expect(whoLikesIt(["Peter", "Max", "John"])).toBe(
        "Peter, Max and John like this"
      );
    });
  });

  describe("when 4 or more names are passed in the array", () => {
    it("should return Peter, Max and 2 others likes this", () => {
      expect(whoLikesIt(["Peter", "Max", "John", "Parker"])).toBe(
        "Peter, Max and 2 others like this"
      );
    });

    it("should return Peter, Max and 3 others likes this", () => {
      expect(whoLikesIt(["Peter", "Max", "John", "Parker", "Mark"])).toBe(
        "Peter, Max and 3 others like this"
      );
    });
  });
});
