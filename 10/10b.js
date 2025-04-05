function createProduct(id,name){
    return{
        productId:id,
        productName:name
    };
}
function showProductDetails(product){
    console.log("Product ID:",product.productId);
    console.log("Product Name:",product.productName);
}
var myProduct=createProduct(1001,"Bluetooth Speaker");
showProductDetails(myProduct);
console.log("\nDesigned by: 22MH1A0539");
