// Step 1: Define the Product interface
interface Product {
    productId: number;
    productName: string;
}

// Step 2: Function to display Product details (Duck Typing Applied)
function displayProduct(product: { productId: number; productName: string }): void {
    console.log(`Product ID: ${product.productId}`);
    console.log(`Product Name: ${product.productName}`);
}

// Step 3: Populate Product details using Duck Typing
const product1 = { productId: 201, productName: "Wireless Mouse" };
const product2 = { productId: 202, productName: "Mechanical Keyboard" };

// Step 4: Display Product details
displayProduct(product1);
displayProduct(product2);
console.log("\nDeveloped by: 22MH1A0539");


