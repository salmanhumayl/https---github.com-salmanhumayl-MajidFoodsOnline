import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-specialoffers',
  templateUrl: './specialoffers.component.html',
  styleUrls: ['./specialoffers.component.css']
})
export class SpecialoffersComponent implements OnInit {

  dealproductitems:Product[]=[]; //blank array to start with
  constructor(private _itemService:ProductService) { }

  ngOnInit(): void {
    this.ShowDeals(2);
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
