var Product = /** @class */ (function () {
    function Product(productId) {
        this.productId = productId;
    }
    Product.prototype.getProductId = function () {
        return "Product id is ".concat(this.productId);
    };
    return Product;
}());
var product = new Product(501);
console.log(product.getProductId());
console.log("Developed by:22MH1A0502");
