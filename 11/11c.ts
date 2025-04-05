class Product {
    productId: number;
  
    constructor(productId: number) {
      this.productId = productId;
    }
  
    getProductId(): string {
      return `Product id is ${this.productId}`;
    }
  }
  
  const product = new Product(501);
  console.log(product.getProductId()); 
  console.log("Developed by:22MH1A0502");
  