const products = []


module.exports = class Product {
    constructor(callTitle) {
        this.title = callTitle
    }

    save() {
        products.push(this)
    }

    static fetchAll() {
        return products
    }
}