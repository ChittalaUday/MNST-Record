function bookMovieTickets(numSeats) {
    const basePrice = 150;

    if (numSeats <= 2) {
        const total = numSeats * basePrice;
        console.log(`Booking successful for ${numSeats} seat(s). Total price: Rs. ${total}`);
    } else if (numSeats >= 6) {
        console.log("Booking not allowed for 6 or more seats.");
    } else {
        let total = 0;
        let discountPercent = 5;
        for (let i = 1; i <= numSeats; i++) {
            let discount = (discountPercent / 100) * basePrice;
            let discountedPrice = basePrice - discount;
            total += discountedPrice;
            console.log(`Customer ${i}: Rs. ${discountedPrice.toFixed(2)} after ${discountPercent}% discount`);
            discountPercent += 2;
        }
        console.log(`Booking successful for ${numSeats} seats. Total price: Rs. ${total.toFixed(2)}`);
    }
}

bookMovieTickets(3); 
console.log("\n");
bookMovieTickets(6);

// console.log("\nDeveloped by: 23MH5A0505");
console.log("\nDeveloped by: 22MH1A0536");