function bookMovieTickets(numSeats) {
    const costPerTicketBase = 150;
    let totalPrice = 0;
  
    if (numSeats <= 0) {
      console.log("Please enter a valid number of seats.");
    
    } else if (numSeats > 5) {
      console.log("Booking is not allowed for 6 or more seats.");
    }else{
        switch(true){
            case numSeats == 2:
                discountPrice = 0.05 * costPerTicketBase;
                totalPrice = numSeats * (costPerTicketBase - discountPrice);
                console.log(`Booking successful for ${numSeats} seat(s). Total price: Rs. ${totalPrice}`);
                break;
            case numSeats == 3:
                discountPrice = 0.07 * costPerTicketBase;
                totalPrice = numSeats * (costPerTicketBase - discountPrice);
                console.log(`Booking successful for ${numSeats} seat(s). Total price: Rs. ${totalPrice}`);
                break;
            case numSeats == 4:
                discountPrice = 0.09 * costPerTicketBase;
                totalPrice = numSeats * (costPerTicketBase - discountPrice);
                console.log(`Booking successful for ${numSeats} seat(s). Total price: Rs. ${totalPrice}`);
                break;
            case numSeats == 5:
                discountPrice = 0.11 * costPerTicketBase;
                totalPrice = numSeats * (costPerTicketBase - discountPrice);
                console.log(`Booking successful for ${numSeats} seat(s). Total price: Rs. ${totalPrice}`);
                break;
            default:
                console.log("Invalid number of seats.");
                break;
        }
    } 
  }

console.log("Booking 3 tickets:");  
bookMovieTickets(3);
console.log("Booking 6 tickets:");
bookMovieTickets(6);
console.log("\nDeveloped by: 23MH5A0505")

  