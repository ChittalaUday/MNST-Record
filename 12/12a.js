var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.setProductId = function (id) {
        this.productId = id;
    };
    Product.prototype.getProductId = function () {
        return this.productId;
    };
    return Product;
}());
var product = new Product();
product.setProductId(101);
console.log("Product ID:", product.getProductId());
// console.log("Developed by: 22MH1A0539");
console.log("Developed by: 23MH5A0505");
