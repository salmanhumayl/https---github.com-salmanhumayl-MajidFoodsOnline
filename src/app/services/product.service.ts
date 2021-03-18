import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';


import{Product} from '../models/product';
import { OrderDetail } from 'src/app/models/OrderDetail';
import{MenuModel} from 'src/app/models/MenuModel';
import{OrderConfirmation} from 'src/app/models/orderconfirmation';


import {AreaChargesUrl, MenuUrl, OrderStatusUrl, AllProductUrl, ProductFilterbyCategoryUrl, ProductFilterUrl, ProductUrl} from 'src/app/config/api';

import {OrderUrl} from 'src/app/config/api';
import { Category } from '../models/category';
import {Shippingcharges} from '../models/shippingcharges'
import { OrderStatus } from '../models/orderstatus';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  sum=0;
  onChangeItem: Subject<Product[]> = new Subject<Product[]>();


  /* products:Product[]=[
    new Product(0,'Boneless (Medium)',47.5,30,'assets/img/product/1_1_1.jpg','assets/img/product/1_1_1.jpg',['assets/img/product/1_2_1.jpg','assets/img/product/1_3_1.jpg']),
    new Product(1,'Boneless (Large) ',50,35,'assets/img/product/1_2_1.jpg','assets/img/product/1_2_1.jpg',['assets/img/product/1_2_1.jpg','assets/img/product/1_3_1.jpg']),
    new Product(2,'Bone-In (Medium)',36.5,30,'assets/img/product/1_3_1.jpg','assets/img/product/1_3_1.jpg',['assets/img/product/product1.jpg','assets/img/product/product1.jpg']),
    new Product(3,'Chicken Tenders (Medium)',46.25,30,'assets/img/product/1_4_1.jpg','assets/img/product/1_4_1.jpg',['assets/img/product/product1.jpg','assets/img/product/product1.jpg']),
    new Product(4,'LEG QUARTERS (MEDIUM)',22.5,30,'assets/img/product/2_5_1.jpg','assets/img/product/2_5_1.jpg',['assets/img/product/product1.jpg','assets/img/product/product1.jpg'])



  ];
 */
  Menu:MenuModel[]=[

    new MenuModel(0,'CHICKEN',
    [
        new Category(1,"BREAST",
        [
         /*  {"item_id":1,"item_description":"Boneless (Medium)","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0,"extraImages":['assets/img/product01.png','assets/img/product01.png']},
          {"item_id":1,"item_description":"Boneless (Large)","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0,"extraImages":['assets/img/product01.png','assets/img/product01.png']},
          {"item_id":1,"item_description":"Bone-in (Medium)","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0,"extraImages":['assets/img/product01.png','assets/img/product01.png']},
          {"item_id":1,"item_description":"Chicken Tenders (Medium)","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0,"extraImages":['assets/img/product01.png','assets/img/product01.png']}
 */
        ]
       ),

       new Category(1,"LEGS",
       [
       //  {"item_id":1,"item_description":"Boneless Whole Leg","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0},
//         {"item_id":1,"item_description":"Leg Quarters (Medium)","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0},
  //       {"item_id":1,"item_description":"Leg Quarters (Large)","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0},
    //     {"item_id":1,"item_description":"Drumsticks","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0}

       ]
      ),

      new Category(1,"THIGNS",
       [
      //   {"item_id":1,"item_description":"Bone-In Thighs","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0},
        // {"item_id":1,"item_description":"Boneless Thigh Meat","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0}


       ]
      ),

      new Category(1,"GROUND CHICKEN",
       [
         //{"item_id":1,"item_description":"Lean Ground Chicken","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0}


       ]
      ),

      new Category(1,"WINGS",
      [
        //{"item_id":1,"item_description":"Medium Split Wings","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0},
        //{"item_id":1,"item_description":"Jumbo Split Wings","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0}

      ]
     ),

    ]
    ),


    new MenuModel(0,'VEGETABLE',
    [
        new Category(1,"VEGETABLE 1",
        [
         // {"item_id":1,"item_description":"ONION","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0},
         // {"item_id":1,"item_description":"TOMATO","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0}

        ]
       ),

       new Category(1,"VEGETABLE 2",
       [
         //{"item_id":1,"item_description":"A111","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0,"extraImages":['assets/img/product01.png','assets/img/product01.png']},
         //{"item_id":1,"item_description":"XXX","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0,"extraImages":['assets/img/product01.png','assets/img/product01.png']},
         //{"item_id":1,"item_description":"CYYYY1","item_price":1,"oldprice":1,"item_primary_thumb":"item_primary_thumb","item_secondary_thumb":"item_secondary_thumb","qty":0,"extraImages":['assets/img/product01.png','assets/img/product01.png']}

       ]
      )

    ]
    ),

  ];

/*   shippingCharges:Shippingcharges[]=[
     {"id":-1,"Area" :"Please Select",Charges:0,"ExcludeAmout":0},
      {"id":0,"Area" :"Alberta",Charges:10,"ExcludeAmout":100},
      {"id":1,"Area" :"British Columbia",Charges:20,"ExcludeAmout":40},
      {"id":2,"Area" :"Manitoba",Charges:25,"ExcludeAmout":40},
      {"id":3,"Area" :"Nova Scotia",Charges:40,"ExcludeAmout":100},
      {"id":4,"Area" :"Toronto",Charges:20,"ExcludeAmout":100},
  ];
 */
  constructor(private _http:HttpClient) {

  }
  private handleError(errorResponse:HttpErrorResponse){
    return throwError(errorResponse.message);

  }

  //getProducts():Product[]
  //{

    //return this.products;

  //}

  getShippingCharges():Observable<Shippingcharges[]>
  {

     return this._http.get<Shippingcharges[]>(AreaChargesUrl)
    .pipe(
      catchError(this.handleError)
  );

  }

  //GetMenu(){
    //return this.Menu;
/// }

  GetMenu():Observable<MenuModel[]>{

    return this._http.get<MenuModel[]>(MenuUrl)
    .pipe(
      catchError(this.handleError)
  );
    }

  GetAllProducts():Observable<Product[]>{

    return this._http.get<Product[]>(AllProductUrl)
    .pipe(
      catchError(this.handleError)
  );
    }

    GetDeal(dealid:number):Observable<Product[]>{
      return this._http.get<Product[]>("http://eservices.mirajfoods.ca/api/deal?iid=" + dealid)
      .pipe(
        catchError(this.handleError)
    );
      }


    GetItemByCatelog(catelogid:number):Observable<Product[]>{

      return this._http.get<Product[]>(ProductFilterUrl +"?iid=" + catelogid)
      .pipe(
        catchError(this.handleError)
    );
      }


      ItemBycategory(cid:number):Observable<Product[]>{

        return this._http.get<Product[]>(ProductFilterbyCategoryUrl +"?iID=" + cid)
        .pipe(
          catchError(this.handleError)
      );
        }

      GetProductsbyid(id:number):Observable<Product>{

        return this._http.get<Product>(AllProductUrl + "?iid=" + id)
       // .pipe(
         // catchError(this.handleError)
      //);
        }


       MyOrders(ID:number):Observable<OrderDetail[]>{


          return this._http.get<OrderDetail[]>("http://eservices.mirajfoods.ca/api/orderbycustomer?IiD=" + ID)
          .pipe(
            catchError(this.handleError)
        );
          }


    AddProductToCard(products:any){
      localStorage.setItem("product",JSON.stringify(products));


    }
    getProductFromCart(){
      return JSON.parse(localStorage.getItem('product'));


    }
    removeAllProductFromCart() {

      localStorage.removeItem("product");
    }


    DeleteProduct(product:Product,productAddedTocart:Product[])
    {
      for (var i = 0; i < productAddedTocart.length; i++) {
        if (productAddedTocart[i].item_id == product.item_id)
        {
          productAddedTocart.splice(i,1);
        }
      }
    }

    CalculateTotal(product:Product[]) {
      let total=0;
      for (let i in product)
      {

        total=total+ (product[i].qty * product[i].item_price)
      }
       return total;
  }

    CalculateSubTotal(product:Product) {
    let subTotal = 0;

    subTotal =product.qty * product.item_price;

    return subTotal;
  }

   CartCount(){

     let count:number=0;
     let productAddedTocart:Product[];
     productAddedTocart=JSON.parse(localStorage.getItem('product'));
    for (var i = 0; i < productAddedTocart.length; i++) {
        count=+count + +productAddedTocart[i].qty;
    }
    return count;
   }

   PlaceOrder (orderDetail:OrderDetail) :Observable<OrderConfirmation> {
    return this._http.post<OrderConfirmation>(OrderUrl,orderDetail)
    .pipe(
      catchError(this.handleError)
  );
  }


  PlaceOrdertesting (orderDetail:OrderDetail) : boolean{
    return true;

  }

    UpdateOrderStatus (OrderStatus:OrderStatus)  {

    return this._http.post(OrderStatusUrl,OrderStatus)
    .pipe(
      catchError(this.handleError)
  );
  }

  getOrderDetail(orderno:string):Observable<OrderDetail>
  {

     return this._http.get<OrderDetail>("http://eservices.mirajfoods.ca/api/orderbynumber?OrderNumber=" + orderno)
    .pipe(
      catchError(this.handleError)
  );
 }

}
