import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filterproductlist',
  templateUrl: './filterproductlist.component.html',
  styleUrls: ['./filterproductlist.component.css']
})
export class FilterproductlistComponent implements OnInit {

  id:number;
  type:string;

  productitems:Product[]=[]; //blank array to start with
  cartItems:Product[]=[];
  isViewLoading:boolean=false;

  constructor(private _itemService:ProductService,
              private activeRoute:ActivatedRoute,
              private msg:MessengerService) {

                this.activeRoute.params.subscribe(
                  (params:Params) =>{
                     this.id=params.id;
                     this.type=params.type;
                      this.RefreshItem(this.id,this.type);
                  }

              );


               }

  ngOnInit(): void {
  }

  RefreshItem(id:number,type:string){
     if (type=="ALL")
     {

        this._itemService.GetItemByCatelog(id).subscribe(
          (data)=>{

            this.productitems=data;
          // console.log(this.productitems);
        },
        error => {
                  alert(error);

                }
        );

     }

     else if (type=="CAT")
     {

        this._itemService.ItemBycategory(id).subscribe(
          (data)=>{

            this.productitems=data;
          // console.log(this.productitems);
        },
        error => {
                  alert(error);

                }
        );

     }


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

    this.msg.updateCartCount(this.cartItems.length);

    this.msg.sendMsg(this.cartItems);


  }

}
