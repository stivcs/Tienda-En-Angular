import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service/product.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NavComponent } from '../../nav/nav.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: any = {};
  message = '';
  action = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productID = params['id'];
      this.productService.getProduct(productID).subscribe(
        (data: any) => {
          this.product = data;
        },
        (error: any) => {
          console.error(error);
        }
      );
    });
  }

  updateProduct(): void {
    const productID = this.product.productID;
    this.productService.updateProduct(productID, this.product).subscribe(
      (data: any) => {
        console.log(this.product);
        console.log(data);
        console.log('Product updated successfully');
        this.updateProductName();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateProductName(): void {
    const productID = this.product.productID;
    this.productService.updateProductName(productID, this.product.product).subscribe(
      (data: any) => {
        console.log(this.product.product);
        this.openSnackBar('Product updated successfully', 'OK');
        console.log('Product updated successfully details');
      },
      (error: any) => {
        console.error(error);
        this.openSnackBar("Product can't update", 'OK');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 10000,
    });
  }

  //function to redirect to the inventory table
  goBack(): void {
    //redirect to the inventory table in Dashboard
    this.router.navigateByUrl('dashboard');

  }

}
