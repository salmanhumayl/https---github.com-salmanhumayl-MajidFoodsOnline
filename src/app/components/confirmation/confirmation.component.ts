import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

import {OrderStatus} from 'src/app/models/orderstatus'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  OrderStatus:OrderStatus=new OrderStatus();

  trnApproved:number;
  trnId:number;
  trnOrderNumber:string

  constructor(private route:ActivatedRoute,
              private router:Router,
              private _itemService:ProductService) {

      this.route.queryParams.subscribe(params => {
      this.OrderStatus.trnId= params['trnId'];
      this.OrderStatus.trnOrderNumber= params['trnOrderNumber'];
      this.OrderStatus.Status=1;

   });

  }

  ngOnInit(): void {
      this.UpdateOrderStatus()

  }

  UpdateOrderStatus()
  {
    this._itemService.UpdateOrderStatus(this.OrderStatus).subscribe(
        (response=>{

          this.router.navigate(['/invoice',this.OrderStatus.trnOrderNumber]);

        })

    );
  }

}
