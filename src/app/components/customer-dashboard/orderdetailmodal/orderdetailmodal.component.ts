import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orderdetailmodal',
  templateUrl: './orderdetailmodal.component.html',
  styleUrls: ['./orderdetailmodal.component.css']
})
export class OrderdetailmodalComponent implements OnInit {

  orderNumber:string;
  orderdetails:OrderDetail;
  Total:number=0;
  GrandTotal:number=0;

  constructor(public bsModalRef:BsModalRef,
              private _itemService:ProductService) { }

  ngOnInit(): void {
      this.LoadOrderDetail();

  }

  LoadOrderDetail(){

    this._itemService.getOrderDetail(this.orderNumber).subscribe(
     {
       next:(data)=>{
         this.orderdetails=data;
        //  console.log(this.orderdetails);
         data[0].OrderItems.forEach(cs=>{

           let qtyprice= cs.OrderedQuantity * cs.PerUnitPrice;

           this.Total=+this.Total + +qtyprice;


       })
     },
     complete:()=>{
         this.GrandTotal= this.Total +  + this.orderdetails[0].ShipingCharges + this.orderdetails[0].ItemTaxableAmount + this.orderdetails[0].TaxAmount ;

     }
   }
  )
  }

}
