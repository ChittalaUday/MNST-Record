
interface Category {
    categoryId: number;
    categoryName: string;
  }
  
  interface Product {
    productId: number;
    productName: string;
    price: number;
  }
  
  interface ProductList extends Category, Product {
    quantity: number;
  }
  
  const item: ProductList = {
    categoryId: 101,
    categoryName: "Electronics",
    productId: 5001,
    productName: "Wireless Headphones",
    price: 99.99,
    quantity: 10
  };
  
  console.log(item);
  console.log("Developed by:22MH1A0502");
  