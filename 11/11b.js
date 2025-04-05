var Product = /** @class */ (function () {
    function Product(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }
    return Product;
}());
var product1 = new Product(101, "iPhone 15", 999.99);
var product2 = new Product(102, "Samsung Galaxy S23", 899.99);
var product3 = new Product(103, "Google Pixel 8", 799.99);
var productList = [product1, product2, product3];
console.log("Mobile Cart Product List:");
productList.forEach(function (product) {
    console.log("".concat(product.productId, " - ").concat(product.productName, " - $").concat(product.price));
});
console.log("Developed by:22MH1A0502");
