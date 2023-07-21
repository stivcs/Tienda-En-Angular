import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.css']
})
export class ProductspageComponent implements OnInit {
  shirts: any;
  rutes: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProduct();
  }

  fetchProduct() {
    const url = 'https://koajstoreapi.onrender.com/api/products';
    this.http.get(url).subscribe((response: any) => {
      this.shirts = response;
      console.log(this.shirts);

      for (let i = 0; i < this.shirts.length; i++) {
        this.rutes.push(`/products/${this.shirts[i].productID}`);
      }

      console.log(this.rutes);
    });
  }
}
