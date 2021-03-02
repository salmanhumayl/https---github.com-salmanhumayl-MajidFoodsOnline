import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product';
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

  constructor(private _itemService:ProductService,
              private activeRoute:ActivatedRoute) {

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

}
