import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const BASE_URL = 'https://koajstoreapi.onrender.com'; // URL API


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    const url = `${BASE_URL}/api/inventory`;
    return this.http.get(url);
  }

  getProduct(productID: number): Observable<any> {
    const url = `${BASE_URL}/api/inventory/product/${productID}`;
    return this.http.get(url);
  }

  updateProduct(productID: number, updatedProduct: any): Observable<any> {
    const url = `${BASE_URL}/api/inventory/product/${productID}`;
    return this.http.put(url, updatedProduct);
  }

  updateProductName(productID: number, updatedProductName: any): Observable<any> {
    const url = `${BASE_URL}/api/products/${productID}`;
    return this.http.put(url, updatedProductName);
  }

  getUser(userID: number): Observable<any> {
    const url = `${BASE_URL}/api/users/${userID}`;
    return this.http.get(url);
  }

  putUser(userID: number, updatedUser: any): Observable<any> {
    const url = `${BASE_URL}/api/users/${userID}`;
    return this.http.put(url, updatedUser);
  }

}
