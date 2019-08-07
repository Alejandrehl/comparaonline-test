const expect = require("chai").expect;

const CarInsurance = require("../src/classes/CarInsurance");
const Product = require("../src/classes/Product");

describe("Co Test", function() {
  it("should foo", function() {
    const coTest = new CarInsurance([new Product("foo", 0, 0)]);
    expect(coTest.products[0].name).equal("foo");
  });
});
