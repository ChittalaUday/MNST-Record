var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(producId, productName, productCategory) {
        this.productId = producId;
        this.productCategory = productCategory;
        this.productName = productName;
    }
    Product.prototype.getProductId = function () {
        console.log("The Product id is :" + this.productId);
    };
    Product.productPrice = 150;
    return Product;
}());
var Gadget = /** @class */ (function (_super) {
    __extends(Gadget, _super);
    function Gadget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gadget.prototype.getProduct = function () {
        console.log("The Product Category is :" + this.productCategory);
    };
    return Gadget;
}(Product));
var g = new Gadget(1334, "mobile", "smartphone");
g.getProductId();
console.log("Product Name is:" + g.productName);
console.log("Product Price is:" + Product.productPrice);
g.getProduct();
console.log("Developed by:22MH1A0502");
