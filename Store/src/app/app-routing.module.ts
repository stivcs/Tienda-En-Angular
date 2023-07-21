import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent} from './components/logout/logout.component';
import { ProductspageComponent} from './components/productspage/productspage.component';
import { RegisterComponent} from './components/register/register.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SuccessfulPayComponent} from './components/successful-pay/successfulPay.component';
import { TokenGuard } from './guard/auth.guard';
import { TokenGuardAdmin } from './guard/admin.guard';
import { WelcomeComponent} from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductFormComponent } from './components/dashboard/product-form/product-form.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { CombinedTokenGuard } from './guard/combinedLogin.guard';

import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { NotFoundComponent } from './components/notFound/notFound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, canActivate:[CombinedTokenGuard]},
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent, canActivate:[CombinedTokenGuard] },
  { path: 'products', component: ProductspageComponent },
  { path: 'products/:id', component: ProductPageComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent,   canActivate: [TokenGuardAdmin]},
  { path: 'dashboard/editar/:id', component: ProductFormComponent,  canActivate: [TokenGuardAdmin]},
  { path: 'adminprofile', component: AdminProfileComponent,  canActivate: [TokenGuardAdmin]},
  //{ path: 'paymentStatus/userId', canActivate: [TokenGuard,TokenGuardAdmin]}
  {path: 'paymentStatus/:userID', component: SuccessfulPayComponent},
  {path: 'product-form', component: ProductFormComponent},
  {path: 'cart', component: CartComponent, canActivate: [TokenGuard]},
  {path: 'notFound', component: NotFoundComponent},
  //Path made for the rest of pages that are not found
  {path: '**', pathMatch: 'full', redirectTo: 'notFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
