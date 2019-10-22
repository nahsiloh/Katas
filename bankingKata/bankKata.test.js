const Account = require("./bankingKata.js");

describe("Banking Kata", () => {
  const Tom = new Account(0);
  it("should show 50 when I deposit $50 in the account ", () => {
    expect(Tom.deposit(50)).toBe(50);
  });

  it("should show 0 when I withdraw $50 in the account ", () => {
    expect(Tom.withdraw(50)).toBe(0);
  });

  it("should print the amount I deposited of 500 and the balance 500 ", () => {
    expect(Tom.printStatement(0)).toContain("+50 50");
  });

  it("should print the amount I withdraw of 100 and the balance 400 ", () => {
    expect(Tom.printStatement(1)).toContain("-50 0");
  });

  it("should print the amount I withdraw of 100 and the balance 400 ", () => {
    expect(Tom.printStatement(1)).toContain("-50 0");
  });
});
