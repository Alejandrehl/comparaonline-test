const Product = require("./src/classes/Product");
const CarInsurance = require("./src/classes/CarInsurance");

const productsAtDayZero = [
  new Product("Medium Coverage", 10, 20),
  new Product("Full Coverage", 2, 0),
  new Product("Low Coverage", 5, 7),
  new Product("Mega Coverage", 0, 80),
  new Product("Mega Coverage", -1, 80),
  new Product("Special Full Coverage", 15, 20),
  new Product("Special Full Coverage", 10, 49),
  new Product("Special Full Coverage", 5, 49),
  new Product("Super Sale", 3, 6)
];

const carInsurance = new CarInsurance(productsAtDayZero);
carInsurance.printResult();
