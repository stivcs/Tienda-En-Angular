export interface Product2 {
  productID: number;
  productName: string;
  description: string;
  price: number;
}

export interface Product {
  inventoryID: number;
  productID: number;
  quantity: number;
  stockMin: number;
  stockMax: number;
  product: Product2;
}
