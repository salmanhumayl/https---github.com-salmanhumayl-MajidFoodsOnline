import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  private productmessage=new Subject();

  isLoggedIn$=new BehaviorSubject(false);
  isWelComeName$=new BehaviorSubject('');


  currentCartCount = new BehaviorSubject(0);
  cartTotal$ = new BehaviorSubject<number>(0);

  ShippingCharges$ = new BehaviorSubject(0);


  productAddedTocart:Product[];

  constructor(private _itemService:ProductService) {

    this.productAddedTocart=this._itemService.getProductFromCart();
    if (this.productAddedTocart!=null)
    {
      this.cartTotal$.next(this.CalculateTotal(this.productAddedTocart));
    }
  }


  CalculateTotal(product:Product[]){
    return this._itemService.CalculateTotal(product)
}



  sendMsg(product:Product[]){
    this.productmessage.next(product);

  }
  getMsg(){
    return this.productmessage.asObservable();


  }
  updateCartCount(count: number) {

    this.currentCartCount.next(count)
  }

  getCartCount()
  {
    return this.currentCartCount.asObservable();
  }

 updateShippingCharges(charges:number){
    this.ShippingCharges$.next(charges);
 }
 getShippingCharges()
 {
   return this.ShippingCharges$.asObservable();
 }


}
