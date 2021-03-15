import { Component, OnInit,AfterViewInit } from '@angular/core';
import { MenuModel } from 'src/app/models/MenuModel';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

import {HomeUrl} from 'src/app/config/api';
import { UserInfo } from 'src/app/models/UserInfo';
import { AuthenticationService } from 'src/app/services/authentication.service';

declare const $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  isLoggedIn:boolean;
  cartItemCount:number=0;
  productAddedTocart:Product[];
  Total:number;
  mShippingCharges:number=0;
  GrandTotal:number;
  MenuModel:MenuModel[];
  HomeUrl=HomeUrl;
  currentUser: UserInfo;
  Name:string;

  constructor(private msg:MessengerService,
             private _itemService:ProductService,
             public authService: AuthenticationService) {


              }

   ngAfterViewInit(){


  }







  ngOnInit(): void {

    this.GetMenu();
    this.GetLoggedinUserDetails();
    this.productAddedTocart=this._itemService.getProductFromCart(); // in case user click f5 / refresh
    if (this.productAddedTocart!=null){
        this.msg.updateCartCount(this._itemService.CartCount());
    }


    this.msg.getCartCount().subscribe((MyCount:number)=>{
      this.cartItemCount = MyCount;
   })

   this.msg.isLoggedIn$.subscribe(data => this.isLoggedIn= data);


    this.msg.getMsg().subscribe((product:Product[])=>{
    this.productAddedTocart=product;
    this.CalculateTotal(this.productAddedTocart)


  })

    this.msg.cartTotal$.subscribe(data => this.Total= data);
    this.msg.isWelComeName$.subscribe(data => this.Name= data);

    if (!this.isLoggedIn)
    {
      if (this.authService.isAuthenticated())
      {
         this.isLoggedIn=true;
      }
    }
    if (this.currentUser!=null)
    {
        this.Name=this.currentUser.FirstName;

    }



  }

  GetLoggedinUserDetails()
  {
    this.currentUser=this.authService.getRole();
  }

  DeleteProduct(product:Product)
{

      this.productAddedTocart=this._itemService.getProductFromCart();
      this._itemService.DeleteProduct(product,this.productAddedTocart);
      this._itemService.removeAllProductFromCart();
      this._itemService.AddProductToCard(this.productAddedTocart);
      this.productAddedTocart=this._itemService.getProductFromCart();
      this.msg.sendMsg(this.productAddedTocart);
      this.CalculateTotal(this.productAddedTocart);
      this.msg.updateCartCount(this._itemService.CartCount());

}

CalculateTotal(product:Product[]){

   this.Total= this._itemService.CalculateTotal(product)

}


GetMenu()
{
      this._itemService.GetMenu().subscribe(

      (data)=>{
        this.MenuModel=data;
    },
    error => {
               alert(error);

             }
    );

}



}
