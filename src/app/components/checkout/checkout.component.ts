import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

import { OrderDetail } from 'src/app/models/OrderDetail';
import { OrderItems } from 'src/app/models/OrderItems';
import { UserInfo } from 'src/app/models/UserInfo';

import {Shippingcharges} from 'src/app/models/shippingcharges'
import{OrderConfirmation} from 'src/app/models/orderconfirmation';
import {HomeUrl} from 'src/app/config/api';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

//  currentUser: UserInfo;
  orderDetail:OrderDetail=new OrderDetail(); //let orderDetail:any={};
  orderItem:OrderItems[];

  ShippingCharges:Shippingcharges[];
  GrandTotal:number;
  ConfirmMessage:OrderConfirmation;
  HomeUrl=HomeUrl;
  mTotal:number;
  showModal: boolean;
  TaxableAmount:number=0;
  ShippingTaxAmount:number=0;

  /* @ViewChild('form') form: ElementRef;
  @ViewChild('AJESMerchantID') MerchantID : ElementRef;
  @ViewChild('AJESOrderNumber') OrderNumber: ElementRef; */
  @ViewChild('checkout') checkout: ElementRef;
  @ViewChild('proceed') proceed: ElementRef;



  productAddedTocart:Product[];
  Total=0;
  lEmptyCard:boolean=false;
  currentUser: UserInfo;

  constructor(public authService: AuthenticationService,
              private _itemService:ProductService,
              private msg:MessengerService,
              private router:Router) { }

  ngOnInit(): void {
    this.GetShippingCharges();
    this.GetLoggedinUserDetails();

    this.orderDetail.CustomerFirstName=this.currentUser.FirstName;
    this.orderDetail.CustomerLastName=this.currentUser.LastName;

    this.productAddedTocart=this._itemService.getProductFromCart();
    this.TaxableAmount=this.GetTaxItemAmount();

    if (this.productAddedTocart!=null)
    {
      if (this.productAddedTocart.length > 0)
      {
        this.lEmptyCard=true;
        this.CalculateTotal(this.productAddedTocart);
        if ( this.orderDetail.ShipingCharges==0 )
        {
            this.GrandTotal=this.Total + this.TaxableAmount;
        }
      }
    }
      this.msg.getMsg().subscribe((product:Product[])=>{
      this.productAddedTocart=product;
      this.CalculateTotal(this.productAddedTocart)
      this.GrandTotal=this.Total + this.TaxableAmount;

    })

  }


  CalculateTotal(product:Product[]){
  this.Total=this._itemService.CalculateTotal(product)
}

GetShippingCharges()
{
  this._itemService.getShippingCharges().subscribe(
      (result=>{
        this.ShippingCharges=result
      })
  );



}


ConfirmOrder(){
  this.proceed.nativeElement.disabled=true;

  this.orderItem=[];


  this.orderDetail.CustomerId= this.currentUser.CustomerID;
  this.orderDetail.OrderPayMethod="CC";

  this.productAddedTocart=this._itemService.getProductFromCart();



  for (let i in this.productAddedTocart) {
    this.orderItem.push({
      ID:0,
      item_id:this.productAddedTocart[i].item_id,
      item_description:this.productAddedTocart[i].item_description,
      OrderedQuantity:this.productAddedTocart[i].qty,
      PerUnitPrice:this.productAddedTocart[i].item_price,
      OrderID:0,
    }) ;

  }
  this.orderDetail.Total=this.Total;
  this.orderDetail.TaxAmount=this.ShippingTaxAmount;
     this.orderDetail.OrderItems=this.orderItem;
     this._itemService.PlaceOrder(this.orderDetail).subscribe(
        (data:OrderConfirmation)=>{
              this.ConfirmMessage=data;
              if (this.ConfirmMessage.OrderID > 0 )
              {
                //alert(this.dd.OrderNumber)
               this._itemService.removeAllProductFromCart();
               window.location.href=this.ConfirmMessage.URL;
              }
              else
              {
                alert(this.ConfirmMessage.Message);
              }

        },
        error => {

             alert(error);
       }
  );

}


GetLoggedinUserDetails()
{
  this.currentUser=this.authService.getRole();
}

onChange(value:number){

  let mShippingTaxAmount:number=0;
  this.ShippingTaxAmount=0;

  if (this.currentUser.WaviedShippingCharges==true)
  {
    this.orderDetail.ItemTaxableAmount=this.TaxableAmount;
    return;
  }
  this.orderDetail.ShipingCharges=0;
  let area =this.ShippingCharges.find(p=>p.AreaID==value)
  let Total=this._itemService.CalculateTotal(this.productAddedTocart);

    if (Total < area.ChargeBelow )
      {
          this.msg.updateShippingCharges(area.Rate); //there was no need of shared service calling , jst made it....
          this.msg.getShippingCharges().subscribe((ShippingCharges:number)=>{
          this.orderDetail.ShipingCharges = ShippingCharges;

       })
        if ( area.Rate > 0 )
        {

          mShippingTaxAmount=this.CalculateShippingTax(area.Rate);
          this.ShippingTaxAmount=+mShippingTaxAmount.toFixed(2);
          this.GrandTotal=+Total + area.Rate + this.ShippingTaxAmount + this.TaxableAmount;
          this.orderDetail.ItemTaxableAmount=this.TaxableAmount;
        }
     }
     else
          {

            this.GrandTotal=+Total + this.TaxableAmount ;
            this.orderDetail.ItemTaxableAmount=this.TaxableAmount;
         }

}

GetTaxItemAmount()
{
  let TaxAmount:number=0;
  for (let i in this.productAddedTocart)
      {

        if (this.productAddedTocart[i].ApplyTax===true && this.productAddedTocart[i].TaxAmountPercentage > 0 )
        {

          TaxAmount=+TaxAmount+ (this.productAddedTocart[i].qty * this.productAddedTocart[i].item_price) * this.productAddedTocart[i].TaxAmountPercentage /100;
          //TaxAmount=+TaxAmount + this.productAddedTocart[i].qty * this.productAddedTocart[i].item_price;

        }
      }

      return TaxAmount;
}

CalculateShippingTax(Rate:number){
//mTaxAmount=+(this.TaxableAmount+ + area.Rate) * 13 / 100;
 return (Rate) * 13 / 100;

}

RedirectHome(){
  alert(this.HomeUrl);
  this.router.navigateByUrl(this.HomeUrl);

}


showConfirmation()
  {
    this.checkout.nativeElement.disabled=true;
    this.showModal = true; // Show-Hide Modal Check

 }
  //Bootstrap Modal Close event
  hide()
  {
    this.checkout.nativeElement.disabled=false;
    this.showModal = false;
  }

}
