import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { authGuard } from './auth.guard';
import { DetailsProductComponent } from './Components/details-product/details-product.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { AllordersComponent } from './Components/allorders/allorders.component';

const routes: Routes = [

  {path:'', component:BlankLayoutComponent, children:[
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'setting', loadChildren:()=>import('./modules/setting/setting.module').then( (m)=> m.SettingModule ) },
    {path:'home', canActivate:[authGuard], component: HomeComponent, title: "Home"},
    {path:'products', canActivate:[authGuard], component: ProductsComponent, title: "Products"},
    {path:'details/:id', canActivate:[authGuard], component: DetailsProductComponent, title: "Product Details"},
    {path:'cart', canActivate:[authGuard], component: CartComponent, title: "Cart"},
    {path:'payment/:id', canActivate:[authGuard], component: PaymentComponent, title: "Payment"},
    {path:'allorders', canActivate:[authGuard], component: AllordersComponent, title: "All Orders"},
    {path:'categories', canActivate:[authGuard], component: CategoriesComponent, title: "categories"},
    {path:'brands', canActivate:[authGuard], component: BrandsComponent, title: "Brands"},
  ]},

  {path:'', component:AuthLayoutComponent, children:[
    {path:'login', component: LoginComponent, title: "Login"},
    {path:'register', component: RegisterComponent, title: "Register"},
  ]},

  {path:'**', component: NotfoundComponent, title: "Error404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
