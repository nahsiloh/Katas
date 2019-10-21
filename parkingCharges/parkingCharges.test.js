const ParkingCharges = require("./parkingCharges");

describe("parking Charges", () => {
  it("should return $2 parking fee when less than 3 hours", () => {
    const customer = new ParkingCharges(2.5);
    expect(customer.calculateCharges()).toBe(2);
  });

  it("should return $2 parking fee when 3 hours", () => {
    const customer = new ParkingCharges(3);
    expect(customer.calculateCharges()).toBe(2);
  });

  it("should return $2.50 parking fee when 3.5hours", () => {
    const customer = new ParkingCharges(3.5);
    expect(customer.calculateCharges()).toBe(2.5);
  });

  it("should return $3 parking fee when 4.5hours", () => {
    const customer = new ParkingCharges(4.5);
    expect(customer.calculateCharges()).toBe(3);
  });

  it("should return $10 parking fee for over 19 hours", () => {
    const customer = new ParkingCharges(19.5);
    expect(customer.calculateCharges()).toBe(10);
  });
});
