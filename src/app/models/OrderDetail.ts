import { DecimalPipe } from '@angular/common';
import {OrderItems} from 'src/app/models/OrderItems';
export class OrderDetail
{
     OrderID :number;
     OrderNumber:string;
     OrderDate:Date;
     CustomerId :number;
     CustomerFirstName:string;
     CustomerLastName:string;
     DeliveryAddress:string;
     DeliveryAddress1:string;
     AreaID :number
     PostalCode:string;
     ShipingCharges :number=0;
     HST:number=0;
     ContactNumber:string;
     OrderPayMethod :string;
     PaymentRefrenceId :string;
     Total:number;
     TaxAmount:number;
     Remarks:string;
     Status:number;
     StatusDescription:string;
     OrderItems:OrderItems[];
}
