class Product{
    static productPrice:number=150;
    private productId:number;
    public productName:string;
    protected productCategory:string;
    constructor(producId,productName,productCategory){ 
      this.productId=producId;
      this.productCategory=productCategory;
      this.productName=productName;
    }
    getProductId():void{
      console.log("The Product id is :" + this.productId);
    }
  }
  class Gadget extends Product{
    getProduct():void{
      console.log("The Product Category is :" +this.productCategory);
    }
  }
  const g:Gadget=new Gadget(1334,"mobile","smartphone");
  g.getProductId();
  console.log("Product Name is:" +g.productName);
  console.log("Product Price is:"+Product.productPrice);
  g.getProduct();
  console.log("Developed by:22MH1A0502");