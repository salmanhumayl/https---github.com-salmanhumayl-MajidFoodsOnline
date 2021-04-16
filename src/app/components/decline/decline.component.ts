import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {OrderStatus} from 'src/app/models/orderstatus'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-decline',
  templateUrl: './decline.component.html',
  styleUrls: ['./decline.component.css']
})
export class DeclineComponent implements OnInit {
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
              this.OrderStatus.Status=2;
            });

  }

  ngOnInit(): void {
    this.UpdateOrderStatus()
  }

  UpdateOrderStatus()
  {
    this._itemService.UpdateOrderStatus(this.OrderStatus).subscribe(
        (response=>{
        })

    );
  }

}
