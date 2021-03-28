import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-specialoffers',
  templateUrl: './specialoffers.component.html',
  styleUrls: ['./specialoffers.component.css']
})
export class SpecialoffersComponent implements OnInit {

  dealproductitems:Product[]=[]; //blank array to start with
  dealid:number;
  showonmenu:number
  constructor(private _itemService:ProductService,
              private activeRoute:ActivatedRoute) {

                this.activeRoute.params.subscribe(
                  (params:Params) =>{
                      this.dealid=params.dealid;
                      this.showonmenu=params.showonmenu;

                      this.ShowDeals(this.dealid);
                  }

              );

               }

  ngOnInit(): void {

  }

  ShowDeals(dealid:number)
  {

         this._itemService.GetDeal(dealid).subscribe(

        (data)=>{
          this.dealproductitems=data;


      },
      error => {
                 alert(error);

               }
      );




  }

}
