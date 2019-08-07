class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
    this.updateValues = function() {
      this.updatePrice();
      this.updateSellIn();
    };
  }

  updatePrice() {
    let deg = 1;
    if (this.sellIn < 1) deg = 2;
    this.price = Math.max(0, Math.min(50, this.price - deg));
  }

  updateSellIn() {
    this.sellIn = this.sellIn - 1;
  }
}

module.exports = Product;
