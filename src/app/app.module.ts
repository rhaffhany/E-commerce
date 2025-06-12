import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { NavbarBlankComponent } from './Components/navbar-blank/navbar-blank.component';
import { NavbarAuthComponent } from './Components/navbar-auth/navbar-auth.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsProductComponent } from './Components/details-product/details-product.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { AllordersComponent } from './Components/allorders/allorders.component';
import { MyhttpInterceptor } from './interceptors/myhttp.interceptor';
import { SearchPipe } from './pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    BrandsComponent,
    CategoriesComponent,
    NavbarBlankComponent,
    NavbarAuthComponent,
    FooterComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    DetailsProductComponent,
    PaymentComponent,
    AllordersComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-right'}),
    FormsModule
  ],
  providers: [ 
    {provide: HTTP_INTERCEPTORS , useClass: MyhttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
