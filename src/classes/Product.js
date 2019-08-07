class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
    this.updateValues = function() {
      this.updateProduct();
    };
  }

  updateProduct() {
    if (this.name !== "Mega Coverage") {
      this.updatePrice();
      this.updateSellIn();
    }
  }

  updatePrice() {
    if (this.name !== "Full Coverage") {
      let deg = 1;
      if (this.sellIn < 1) deg = 2;
      this.price = Math.max(0, Math.min(50, this.price - deg));
    } else {
      let inc = 1;
      if (this.sellIn < 1) inc = 2;
      this.price = Math.max(0, Math.min(50, this.price + inc));
    }
  }

  updateSellIn() {
    this.sellIn = this.sellIn - 1;
  }
}

module.exports = Product;
