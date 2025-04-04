const pricePerTicket = 150;
const festiveDiscountPercent = 10;

function bookTickets(n) {
  const totalPrice = n * pricePerTicket;
  const discountAmount = (festiveDiscountPercent / 100) * totalPrice;
  const finalPrice = totalPrice - discountAmount;

  console.log(`Number of Tickets: ${n}`);
  console.log(`Total Price: ${n} x Rs.${pricePerTicket}= Rs.${totalPrice}`);
  console.log(`Festive Discount (${festiveDiscountPercent}%): Rs.${discountAmount}`);
  console.log(`Amount to be paid: Rs.${finalPrice}`);
}

bookTickets(4); 
console.log("\nDeveloped by: 23MH5A0505");