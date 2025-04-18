class Product {
    private productId: number;
    setProductId(id: number): void {
      this.productId = id;
    }
    getProductId(): number {
      return this.productId;
    }
  }
  const product = new Product();
  product.setProductId(101);
  console.log("Product ID:", product.getProductId());

  // console.log("Developed by: 22MH1A0536");
  console.log("Developed by: 23MH5A0505");