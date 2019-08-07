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
    if (this.name == "Full Coverage") {
      let inc = 1;
      if (this.sellIn < 1) inc = 2;
      this.price = Math.max(0, Math.min(50, this.price + inc));
    } else if (this.name == "Special Full Coverage") {
      if (this.sellIn > 10) this.price = Math.max(0, Math.min(this.price + 1));
      if (this.sellIn <= 10 && this.sellIn > 5)
        this.price = Math.max(0, Math.min(this.price + 2));
      if (this.sellIn <= 5) this.price = Math.max(0, Math.min(this.price + 3));
      if (this.sellIn < 1) this.price = 0;
    } else {
      let deg = 1;
      if (this.sellIn < 1) deg = 2;
      this.price = Math.max(0, Math.min(50, this.price - deg));
    }
  }

  updateSellIn() {
    this.sellIn = this.sellIn - 1;
  }
}

module.exports = Product;
