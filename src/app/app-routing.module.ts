import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {CartDetailComponent} from './components/shopping-cart/cart-detail/cart-detail.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import  {LoginComponent} from './components/login/login.component';
import {ProductDetailComponent} from './components/shopping-cart/product-detail/product-detail.component';

import {TestComponent} from './components/test/test.component';
import {ConfirmationComponent} from './components/confirmation/confirmation.component';
import {AboutusComponent} from './components/aboutus/aboutus.component';
import {ContactusComponent} from './components/contactus/contactus.component';
import {FilterproductlistComponent} from './components/shopping-cart/filterproductlist/filterproductlist.component';

import { AuthGuardService  } from './guard/auth-guard.service';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { MyordersComponent } from './components/customer-dashboard/myorders/myorders.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SpecialoffersComponent } from './components/specialoffers/specialoffers.component';
import { TermconditionsComponent } from './components/termconditions/termconditions.component';
import { PolicyComponent } from './components/policy/policy.component';

const routes: Routes = [
  {path:'home',component:ShoppingCartComponent},
  {path: 'mycartDetail', component: CartDetailComponent},
  {path: 'itemdetail/:id', component: ProductDetailComponent},
  {path: 'filterproduct/:id/:type', component: FilterproductlistComponent},
  {path: 'invoice/:orderno', component: InvoiceComponent},
  {path: 'test', component:TestComponent},
  {path:'checkout',component:CheckoutComponent,canActivate:[AuthGuardService]},
  {path:'MyAccount',component:CustomerDashboardComponent,canActivate:[AuthGuardService]},
  {path:'myorders',component:MyordersComponent,canActivate:[AuthGuardService]},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'terms',component:TermconditionsComponent},
  {path:'specialoffers',component:SpecialoffersComponent},
  {path:'policy',component:PolicyComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}


];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
