class Product {
    constructor(name, desc, price) {
        this.name = name;
        this.desc = desc;
        this.price = price
        this.inStock = 0;
    }
    addToStock(amount) {
        this.inStock += amount;
    }
    calculateDiscount(discount) {
        return this.price - (this.price * discount/100);
    }
}

const rice = new Product("Rice", "New Rice Label", 100);
console.log(rice);
rice.addToStock(22)
console.log(rice);
console.log(rice.calculateDiscount(20));
