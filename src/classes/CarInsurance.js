class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updateValues(i) {
    this.products.forEach(product => {
      if (i > 0) product.updateValues();
      console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
    });
  }

  printResult() {
    console.log("OMGHAI!");
    for (let i = 0; i <= 30; i += 1) {
      console.log(`-------- day ${i} --------`);
      console.log("name, sellIn, price");
      this.updateValues(i);
      console.log("");
    }
  }
}

module.exports = CarInsurance;
