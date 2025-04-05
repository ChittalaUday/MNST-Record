var cart = [];
var pushToCart = function (item) {
    cart.push(item);
};
function AddToCart() {
    var prodcutName = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        prodcutName[_i] = arguments[_i];
    }
    for (var _a = 0, prodcutName_1 = prodcutName; _a < prodcutName_1.length; _a++) {
        var item = prodcutName_1[_a];
        pushToCart(item);
    }
    return cart;
}
console.log("cart items are " + AddToCart("samsung", "oppo", "realme", "vivo1820"));
console.log("\nDeveloped by: 22MH1A0539");
