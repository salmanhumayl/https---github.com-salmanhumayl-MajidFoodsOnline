import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service'
import { ProductService } from 'src/app/services/product.service';
import{Product} from 'src/app/models/product';
import { MenuModel } from 'src/app/models/MenuModel';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare const $:any;

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit  {


  productitem:Product[]; //blank array to start with

  cartItems:Product[]=[];
  MenuModel:MenuModel[];
  isViewLoading:boolean=false;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    autoWidth:true,
    autoHeight:true,

    navText: ['Previous', 'Next'],
     responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      720: {
        items: 3
      },
      1000: {
        items: 4
      }

    },
    nav: true
  }
  constructor(private _itemService:ProductService,
              private msg:MessengerService) {
              }

  ngOnInit(): void {

  this.ShowProducts();
  }

  ShowProducts()
  {
         this._itemService.GetAllProducts().subscribe(

        (data)=>{
          this.productitem=data;
          //console.log(this.productitem)
      },
      error => {
                 alert(error);

               }
      );




  }



  addProductToCart(product:Product){

    this.isViewLoading=true;
    let productExits=false;
    this.cartItems=this._itemService.getProductFromCart();


      for (let i in this.cartItems)
      {
        if (this.cartItems[i].item_id===product.item_id){
          this.cartItems[i].qty++
          this._itemService.removeAllProductFromCart();
          this._itemService.AddProductToCard(this.cartItems);
          productExits=true;
          break;
        }
      }
        if (!productExits)
        {

          if (this.cartItems==null)
          {
            this.cartItems=[];
          }
          product.qty=1;
          this.cartItems.push(product);
          this._itemService.removeAllProductFromCart();
          this._itemService.AddProductToCard(this.cartItems);

        }

    setTimeout(() => {
      this.isViewLoading=false;
    }, 1000);

    //this.msg.updateCartCount(this.cartItems.length);
    //let productAddedTocart:Product[];
    //productAddedTocart=this._itemService.getProductFromCart();

    this.msg.updateCartCount(this._itemService.CartCount());
    this.msg.sendMsg(this.cartItems);


  }

}
