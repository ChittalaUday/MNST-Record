function calculateTotalPrice(quantity: number, price: number): number {
    const totalPrice = quantity * price;
    return totalPrice;
}
const quantity = 3;
const price = 499.99;

const total = calculateTotalPrice(quantity, price);
console.log(`Total Price: ₹${total.toFixed(2)}`);
console.log("Developed by: 23MH5A0505");
//console.log("Developed by: 22MH1A0536");