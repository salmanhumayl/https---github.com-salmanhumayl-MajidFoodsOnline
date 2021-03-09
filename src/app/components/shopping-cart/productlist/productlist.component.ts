import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service'
import { ProductService } from 'src/app/services/product.service';
import{Product} from 'src/app/models/product';
import { MenuModel } from 'src/app/models/MenuModel';

declare const $:any;

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit  {


  productitems:Product[]=[]; //blank array to start with

  cartItems:Product[]=[];
  MenuModel:MenuModel[];

  constructor(private _itemService:ProductService,
              private msg:MessengerService) {



              }

  ngOnInit(): void {
  this.GetMenu();
  this.ShowProducts();
  }

  ShowProducts()
  {
         this._itemService.GetAllProducts().subscribe(

        (data)=>{
          this.productitems=data;
        //  console.log(this.productitems)
      },
      error => {
                 alert(error);

               }
      );

    //this.productitems=this._itemService.getProducts();


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

RefreshItem(catelogid:number){

  this._itemService.GetItemByCatelog(catelogid).subscribe(

    (data)=>{

      this.productitems=data;
     // console.log(this.productitems);
  },
  error => {
             alert(error);

           }
  );

  //this.productitems=this._itemService.getProducts();


}





}
