const cart:string[]=[];
const pushToCart=(item:string)=>{
    cart.push(item);
}
function AddToCart(...prodcutName:string[]){
    for(const item of prodcutName){
          pushToCart(item);
    }
    return cart;
}
console.log("cart items are "+AddToCart("samsung","oppo","realme","vivo1820"));
console.log("\nDeveloped by: 23MH5A0505");
//console.log("Developed by: 22MH1A0536");