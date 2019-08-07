const expect = require("chai").expect;
const CarInsurance = require("../src/classes/CarInsurance");
const Product = require("../src/classes/Product");

describe("Co Test", () => {
  it("should foo", () => {
    const test = new CarInsurance([new Product("fixme", 0, 0)]);
    test.printResult();
    expect(test.products[0].name).equal("fixme");
  });
});
