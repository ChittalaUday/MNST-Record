interface Product {
    productId: number;
    productName: string;
}
function displayProduct(product: { productId: number; productName: string }): void {
    console.log(`Product ID: ${product.productId}`);
    console.log(`Product Name: ${product.productName}`);
}
const product1 = { productId: 201, productName: "Wireless Mouse" };
const product2 = { productId: 202, productName: "Mechanical Keyboard" };
displayProduct(product1);
displayProduct(product2);
console.log("\nDeveloped by: 23MH5A0505");
//console.log("Developed by: 22MH1A0536");