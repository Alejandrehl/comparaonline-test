class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updateValues() {
    this.products.forEach(product => {
      product.updateValues();
      console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
    });
  }

  printResult() {
    for (let i = 1; i <= 30; i += 1) {
      console.log(`-------- day ${i} --------`);
      console.log("name, sellIn, price");
      this.updateValues();
      console.log("");
    }
  }
}

module.exports = CarInsurance;
