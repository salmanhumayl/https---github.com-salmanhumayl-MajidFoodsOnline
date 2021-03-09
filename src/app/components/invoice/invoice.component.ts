import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  orderid:number
  orderdetails:OrderDetail;
  Total:number=0;
  GrandTotal:number=0;
  orderno:string;

  constructor( private _itemService:ProductService,
               private activeRoute:ActivatedRoute) {

    this.activeRoute.params.subscribe(
      (params:Params) =>{
          this.orderno=params.orderno;

          this.LoadOrderDetail();
      }

  );


  }

  ngOnInit(): void {
  }



  LoadOrderDetail(){

    this._itemService.getOrderDetail(this.orderno).subscribe(
     {
       next:(data)=>{
         this.orderdetails=data;
          //console.log(this.orderdetails);
         data[0].OrderItems.forEach(cs=>{

           let qtyprice= cs.OrderedQuantity * cs.PerUnitPrice;

           this.Total=+this.Total + +qtyprice;


       })
     },
     complete:()=>{
         this.GrandTotal= this.Total +  + this.orderdetails[0].ShipingCharges + this.orderdetails[0].TaxAmount;

     }
   }
  )
  }
}
