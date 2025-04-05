namespace ProductUtility {
    export class Product {
      private productId: number;
  
      setProductId(id: number): void {
        this.productId = id;
      }
  
      getProductId(): number {
        return this.productId;
      }
    }
  }
  export { ProductUtility };
  