function displayProduct(product) {
    console.log("Product ID: ".concat(product.productId));
    console.log("Product Name: ".concat(product.productName));
}
var product1={productId: 201,productName: "Wireless Mouse" };
var product2={productId: 202,productName: "Mechanical Keyboard" };

displayProduct(product1);
displayProduct(product2);

