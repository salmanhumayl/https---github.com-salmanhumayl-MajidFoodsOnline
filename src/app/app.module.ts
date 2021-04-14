import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SliderComponent } from './components/shared/slider/slider.component';
import { ShippingareaComponent } from './components/shared/shippingarea/shippingarea.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductlistComponent } from './components/shopping-cart/productlist/productlist.component';
import { BannerareaComponent } from './components/shared/bannerarea/bannerarea.component';
import { DealofweekComponent } from './components/shopping-cart/dealofweek/dealofweek.component';
import { BannerfullComponent } from './components/shared/bannerfull/bannerfull.component';
import { BestsellerComponent } from './components/shopping-cart/bestseller/bestseller.component';
import { MostviewComponent } from './components/shopping-cart/mostview/mostview.component';
import { BlogpostComponent } from './components/shared/blogpost/blogpost.component';
import { FeatureproductComponent } from './components/shopping-cart/featureproduct/featureproduct.component';
import { BrandareaComponent } from './components/shared/brandarea/brandarea.component';
import { ProductItemComponent } from './components/shopping-cart/productlist/product-item/product-item.component';
import { CartDetailComponent } from './components/shopping-cart/cart-detail/cart-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProductDetailComponent } from './components/shopping-cart/product-detail/product-detail.component';
import { ProductImagesComponent } from './components/shopping-cart/product-detail/product-images/product-images.component';
import { TestComponent } from './components/test/test.component';
import { ProductImagesSingleComponent } from './components/shopping-cart/product-detail/product-images/product-images-single/product-images-single.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { FilterproductlistComponent } from './components/shopping-cart/filterproductlist/filterproductlist.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { MyordersComponent } from './components/customer-dashboard/myorders/myorders.component';
import { SpecialoffersComponent } from './components/specialoffers/specialoffers.component';
import { DeliveryinfoComponent } from './components/deliveryinfo/deliveryinfo.component';
import { TermconditionsComponent } from './components/termconditions/termconditions.component';
import { PolicyComponent } from './components/policy/policy.component';
import { OrderdetailmodalComponent } from './components/customer-dashboard/orderdetailmodal/orderdetailmodal.component';
import {NgxPrintModule} from 'ngx-print';

import {ModalModule} from 'ngx-bootstrap/modal';
import { DeclineComponent } from './components/decline/decline.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    ShippingareaComponent,
    ShoppingCartComponent,
    ProductlistComponent,
    BannerareaComponent,
    DealofweekComponent,
    BannerfullComponent,
    BestsellerComponent,
    MostviewComponent,
    BlogpostComponent,
    FeatureproductComponent,
    BrandareaComponent,
    ProductItemComponent,
    CartDetailComponent,
    CheckoutComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
    ProductDetailComponent,
    ProductImagesComponent,
    TestComponent,
    ProductImagesSingleComponent,
    ContactusComponent,
    AboutusComponent,
    ConfirmationComponent,
    FilterproductlistComponent,
    InvoiceComponent,
    CustomerDashboardComponent,
    MyordersComponent,
    SpecialoffersComponent,
    DeliveryinfoComponent,
    TermconditionsComponent,
    PolicyComponent,
    OrderdetailmodalComponent,
    DeclineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPrintModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
