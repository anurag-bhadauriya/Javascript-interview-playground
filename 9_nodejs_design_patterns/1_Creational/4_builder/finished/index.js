var PersonBuilder = require('./PersonBuilder');

// Employees
let sue = new PersonBuilder('Sue')
    .makeEmployee()
    .makeManager()
    .addHours(60)
    .build();

console.log(sue.toString());

let bill = new PersonBuilder('Bill')
    .makeEmployee()
    .addHours(20)
    .build();

console.log(bill.toString());
