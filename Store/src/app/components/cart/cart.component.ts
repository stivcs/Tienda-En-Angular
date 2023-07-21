import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;
  userID: any;
  cartIDArray: number[] = [];
  quantity: number = 1;
  ProductQuantity: number = 10;
  paymentURL: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.userID = localStorage.getItem('token');
    let userIdObject = JSON.parse(this.userID);
    this.userID = userIdObject.user.userID;
    console.log(userIdObject.user.userID);
    const apiUrl = `https://koajstoreapi.onrender.com/api/cart/user/${userIdObject.user.userID}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      // Filtrar los elementos con cartStatus "Ordered"
      const filteredItems = response.filter((item: any) => item.cartStatus !== "Ordered");

      this.cartItems = filteredItems;

      /*iterate through the cartItems array and add the price of each item to the totalAmount variable*/
      for (let i = 0; i < this.cartItems.length; i++) {
        this.totalAmount += this.cartItems[i].product.price * this.cartItems[i].quantity;
      }

      /*get the cart id of each item in the cartItems array and push it to the cartIDArray*/
      for (let i = 0; i < this.cartItems.length; i++) {
        this.cartIDArray.push(this.cartItems[i].cartID);
      }

      console.log(this.cartIDArray);
      console.log(this.totalAmount);
      console.log(response);
    });

    // Actualizar la información del carrito cada 5 segundos
    setTimeout(() => {
      this.getItems();
    }, 100000);
  }

  checkout() {
    const apiUrl = 'https://koajstoreapi.onrender.com/api/orders';
    const payload = {
      userID: this.userID,
      shippingAddress: "Perreira"
    };

    this.http.post(apiUrl, payload).subscribe((response: any) => {
      // Asignar la URL de pago a la propiedad paymentURL
      this.paymentURL = response.url;
      console.log('Checkout response:', response);

      // Redireccionar la página actual a la URL de pago
      if (this.paymentURL) {
        window.location.href = this.paymentURL;
      }
    });
  }
}