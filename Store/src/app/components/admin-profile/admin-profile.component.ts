import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/product.service/product.service';
import { LocalStorageService } from '../../local-storage.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  user: any = {};
  userID: number = 0;
  message = '';
  action = '';

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const token = this.localStorageService.getItem('token');
    this.userID = token.user.userID;
    this.productService.getUser(this.userID).subscribe(
      (data: any) => {
        this.user = data;
        console.log(this.user);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateUserData(): void {
    const userID = this.userID;
    //send the information contained in the form to the server
    this.productService.putUser(userID, this.user).subscribe(
      (data: any) => {
        console.log(this.user);
        console.log(data);
        console.log('User updated successfully');
        this.openSnackBar('User updated successfully', 'OK');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 10000,
    });
  }

  goBack(): void {
    this.router.navigateByUrl('');
  }
}
