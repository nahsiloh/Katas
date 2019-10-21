class ParkingCharges {
  constructor(car, hours) {
    this.car = car;
    this.hours = hours;
  }

  calculateCharges() {
    if (this.hours <= 3) {
      return 2;
    }

    if (this.hours > 19) {
      return 10;
    }

    if (3 < this.hours <= 19) {
      const remaininghours = Math.ceil(this.hours - 3);
      const fee = remaininghours * 0.5 + 2;
      return fee;
    }
  }

  printCharges() {
    console.log(`${this.car} | $ ${this.hours}`);
  }
}


const customer1 = new ParkingCharges("car 1", 6);
customer1.calculateCharges();
customer1.printCharges();

const customer2 = new ParkingCharges("car 2", 5);
customer2.calculateCharges();
customer2.printCharges();

const customer3 = new ParkingCharges("car 3", 20);
customer3.calculateCharges();
customer3.printCharges();

console.log(`total | $ ${}`)

// const total = charge1 + charge2 + charge3;

// console.log(
//   `
//    --------------------
//    car 1 | $ ${charge1}
//    car 2 | $ ${charge2}
//    car 3 | $ ${charge3}
//    --------------------
//    total | $ ${total}`
// );

module.exports = ParkingCharges;
