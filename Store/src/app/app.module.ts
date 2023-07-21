import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ProductspageComponent } from './components/productspage/productspage.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/notFound/notFound.component';
import { SuccessfulPayComponent } from './components/successful-pay/successfulPay.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule} from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { ProductFormComponent } from './components/dashboard/product-form/product-form.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryTableComponent } from './components/dashboard/inventory-table/inventory-table.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { MatRadioModule } from '@angular/material/radio';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';

import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ProductspageComponent,
    ProductPageComponent,
    CreateProductComponent,
    FooterComponent,
    NotFoundComponent,
    SuccessfulPayComponent,
    ProductFormComponent,
    WelcomeComponent,
    LogoutComponent,
    DashboardComponent,
    InventoryTableComponent,
    CarouselComponent,
    CartComponent,
    CartItemComponent,
    AdminProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatRadioModule
  ],
  providers: [AuthService,
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
