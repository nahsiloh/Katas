class Account {
  constructor(balance) {
    this.balance = balance;
    this.statements = [];
  }

  deposit(amount) {
    this.balance = this.balance + amount;
    let transaction = `+${amount} ${this.balance}`;
    this.statements.push(transaction);
    return this.balance;
  }

  withdraw(amount) {
    this.balance = this.balance -= amount;
    let transaction = `-${amount} ${this.balance}`;
    this.statements.push(transaction);
    return this.balance;
  }

  printStatement() {
    console.log(this.statements);
    return this.statements;
  }
  // return this.statements[i];
}

module.exports = Account;
