const sumOfABeach = require("./SumOfABeach");

describe("Sum of A Beach", () => {
  describe("If string is sand", () => {
    it("should return 1 if sand appears once regardless of casing", () => {
      expect(sumOfABeach("SaNd")).toBe(1);
    });

    it("should return 2 if sand appears twice regardless of casing", () => {
      expect(sumOfABeach("SaNdSanD")).toBe(2);
    });

    it("should return 1 if sand appears once within a string", () => {
      expect(sumOfABeach("deSaNd")).toBe(1);
    });

    it("should return 0 if sand is not in string", () => {
      expect(sumOfABeach("hello")).toBe(0);
    });
  });
  describe("If string is water", () => {
    it("should return 1 if water appears once regardless of casing", () => {
      expect(sumOfABeach("waTer")).toBe(1);
    });

    it("should return 1 if water appears once within a string", () => {
      expect(sumOfABeach("dewaTer")).toBe(1);
    });
    it("should return 0 if sand is not in string", () => {
      expect(sumOfABeach("hello")).toBe(0);
    });
  });
  describe("If string is fish", () => {
    it("should return 1 if water appears once regardless of casing", () => {
      expect(sumOfABeach("FisH")).toBe(1);
    });

    it("should return 1 if water appears once within a string", () => {
      expect(sumOfABeach("defiSh")).toBe(1);
    });
    it("should return 0 if sand is not in string", () => {
      expect(sumOfABeach("hello")).toBe(0);
    });
  });
  describe("If string is sun", () => {
    it("should return 1 if sun appears once regardless of casing", () => {
      expect(sumOfABeach("SuN")).toBe(1);
    });

    it("should return 1 if sun appears once within a string", () => {
      expect(sumOfABeach("desun")).toBe(1);
    });
    it("should return 0 if sun is not in string", () => {
      expect(sumOfABeach("hello")).toBe(0);
    });
  });
  describe("if string contains sun & fish", () => {
    it("should return 3 when sun, sun and fish is within a string", () => {
      expect(sumOfABeach("SunSunFiSh")).toBe(3);
    });
  });
  describe("if string contains sun & fish & water", () => {
    it("should return 3 when sun, fish and water is within a string", () => {
      expect(sumOfABeach("SunFiShWater")).toBe(3);
    });
  });
});
