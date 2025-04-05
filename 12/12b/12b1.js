"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUtility = void 0;
var ProductUtility;
(function (ProductUtility) {
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
    ProductUtility.Product = Product;
})(ProductUtility || (exports.ProductUtility = ProductUtility = {}));
