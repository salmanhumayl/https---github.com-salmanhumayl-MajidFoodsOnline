import { Component, OnInit } from '@angular/core';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { UserInfo } from 'src/app/models/UserInfo';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductService } from 'src/app/services/product.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { OrderdetailmodalComponent } from './orderdetailmodal/orderdetailmodal.component';


@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
 OrderDetail:OrderDetail[]=[];
 currentUser: UserInfo;
 modalRef:BsModalRef;


  constructor(private _itemService:ProductService,
    private authService: AuthenticationService,
    private modalService:BsModalService) { }

  ngOnInit(): void {
    this.GetLoggedinUserDetails()
    this.Myorders();

  }
  GetLoggedinUserDetails()
{
  this.currentUser=this.authService.getRole();
}



  Myorders()
  {
         this._itemService.MyOrders(this.currentUser.CustomerID).subscribe(

        (data)=>{
          this.OrderDetail=data;
         // console.log(this.OrderDetail)
      },
      error => {
                 alert(error);

               }
      );

    //this.productitems=this._itemService.getProducts();


  }

  showDetail(orderno:string){
    const initialState={
      orderNumber:orderno,
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true,
      class: 'modal'
    };

    this.modalRef = this.modalService.show(OrderdetailmodalComponent,{initialState});

  }
}
