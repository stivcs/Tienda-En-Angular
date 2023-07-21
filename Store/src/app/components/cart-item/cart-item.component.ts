import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()
  cartId!: number;
  userID: any;
  cartItems: any[] = [];
  cartItem: any;
  image: any;
  name: any;
  price: any;
  quantity!: number;
  productQuantity!: number;
  product: any;
  add: number | any = 1;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.userID = localStorage.getItem('token');
    let userIdObject = JSON.parse(this.userID);
    this.userID = userIdObject.user.userID;
    const apiUrl = `https://koajstoreapi.onrender.com/api/cart/user/${userIdObject.user.userID}`;
  
    this.http.get(apiUrl).subscribe((response: any) => {
      this.cartItems = response;
  
      /* Saves the object of the item with the cartID that matches the cartId input */
      let item = this.cartItems.find((item) => item.cartID === this.cartId);
      
      // Verificar el estado del carrito
      console.log(item.cartStatus);

        this.product = item.product.productID;
        console.log(this.product);
        /* Name of the item */
        this.name = item.product.productName;
        /* Price of the item */
        this.price = item.product.price;
        /* Quantity of the item */
        this.quantity = item.quantity;
        /* Get the image of the item with the productID with this API call */
        const apiUrl2 = `https://koajstoreapi.onrender.com/api/products/${item.product.productID}`;
        this.http.get(apiUrl2).subscribe((response: any) => {
          /* Image of the item */
          this.image = response.productImages[0].imageURL;
        });
  
        /*get the stock of the item with the productID with this API call */
        const apiUrl3 = `https://koajstoreapi.onrender.com/api/inventory/product/${item.product.productID}`;
        this.http.get(apiUrl3).subscribe((response: any) => {
          /* Stock of the item */
          this.productQuantity = response.quantity;
        });
    });
  }

  

  removeItem() {
    const apiUrl = `https://koajstoreapi.onrender.com/api/cart/${this.cartId}`;
    this.http.delete(apiUrl).subscribe((response: any) => {
      // Aquí puedes realizar cualquier acción adicional después de eliminar el item del carrito, si es necesario.
      console.log('Item removed from cart:', response);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/cart']);
      });
    });
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.add = -1;
      this.updateCartItem();
    }
  }

  increaseQuantity() {
    console.log(this.quantity);
    console.log(this.productQuantity);
    console.log(this.quantity < this.productQuantity)
    if (this.quantity < this.productQuantity){
      this.quantity++;
      this.add = 1;
      this.updateCartItem();
    }
  }

  updateCartItem() {
    const apiUrl = `https://koajstoreapi.onrender.com/api/cart`;
    const payload = {
      userID: this.userID,
      productID: this.product,
      quantity: this.add
    };
    this.http.post(apiUrl, payload).subscribe((response: any) => {
      // Aquí puedes realizar cualquier acción adicional después de actualizar la cantidad del item en el carrito, si es necesario.
      console.log('Item quantity updated:', response);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/cart']);
      });
    });
  }
}