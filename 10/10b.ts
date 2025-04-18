interface Product {
    productId: number;
    productName: string;
}
function createProduct(id: number, name: string): Product {
    return {
        productId: id,
        productName: name
    };
}
function showProductDetails(product: Product): void {
    console.log("Product ID:", product.productId);
    console.log("Product Name:", product.productName);
}
const myProduct = createProduct(1001, "Bluetooth Speaker");
showProductDetails(myProduct);

console.log("\nDeveloped by: 23MH5A0505")
//console.log("Developed by: 22MH1A0536");