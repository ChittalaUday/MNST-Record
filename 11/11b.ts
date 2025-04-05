
class Product {
    productId: number;
    productName: string;
    price: number;
  
    constructor(productId: number, productName: string, price: number) {
      this.productId = productId;
      this.productName = productName;
      this.price = price;
    }
  }
  
 
  const product1 = new Product(101, "iPhone 15", 999.99);
  const product2 = new Product(102, "Samsung Galaxy S23", 899.99);
  const product3 = new Product(103, "Google Pixel 8", 799.99);
  
 
  const productList: Product[] = [product1, product2, product3];

  console.log("Mobile Cart Product List:");
  productList.forEach(product => {
    console.log(`${product.productId} - ${product.productName} - $${product.price}`);
  });
  console.log("Developed by:22MH1A0502");
  