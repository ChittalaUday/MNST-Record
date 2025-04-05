type Product = {
    productId: number;
    name: string;
    price: number;
  };
  
  const products: Product[] = [
    { productId: 101, name: "Samsung Galaxy", price: 40000 },
    { productId: 102, name: "iPhone 14", price: 75000 },
    { productId: 103, name: "Nokia Classic", price: 25000 }
  ];
  
  function handleProductClick(productId: number): void {
    const selectedProduct = (() => {
      return products.find(product => product.productId === productId);
    })();
  
    if (selectedProduct) {
      console.log("Navigating to Product Details...");
      console.log(selectedProduct);
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    } else {
      console.log("Product not found");
    }
  }  