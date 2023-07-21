import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit {
  product: any;
  selectedImage: string = '';
  quantity: number = 1;
  ProductQuantity: any;
  userID: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.fetchProduct(productId);
      this.fetchProductQuantity(productId);
    });
  }

  fetchProduct(productId: string) {
    this.http.get(`https://koajstoreapi.onrender.com/api/products/${productId}`).subscribe((response: any) => {
      this.product = response;
      console.log(this.product);
    });
  }

  fetchProductQuantity(productId: string) {
    this.http.get(`https://koajstoreapi.onrender.com/api/inventory/product/${productId}`).subscribe((productQuantity: any) => {
      this.ProductQuantity = productQuantity.quantity;
      console.log(this.ProductQuantity);
    });
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  addToCart() {
    this.userID = localStorage.getItem('token'); //ob
    let userIdObject = JSON.parse(this.userID);
    const cartItem = {
      //saca el user id del local storage
      userID: userIdObject.user.userID,
      productID: this.product.productID,
      quantity: this.quantity,
    };

    this.http.get(`https://koajstoreapi.onrender.com/api/inventory/product/${this.product.productID}`)
      .subscribe((inventoryResponse: any) => {
        const availableQuantity = inventoryResponse.quantity;

        if (this.quantity <= availableQuantity) {
          console.log(userIdObject.user.userID);
          this.http.post('https://koajstoreapi.onrender.com/api/cart', cartItem)
            .subscribe((response: any) => {
              console.log('Item added to cart:', response);
              // Aquí puedes agregar lógica adicional, como mostrar una notificación de éxito, actualizar el estado del carrito, etc.
            });
        } else {
          console.log('No hay suficiente stock disponible');
          // Aquí puedes mostrar una notificación al usuario informando que no hay suficiente stock disponible
        }
      });
  }

  increaseQuantity() {
    if (this.quantity < this.ProductQuantity){
      this.quantity++;
    } 
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
