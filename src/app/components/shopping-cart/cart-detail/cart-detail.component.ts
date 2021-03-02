import { Component, OnInit } from '@angular/core';
import { HomeUrl } from 'src/app/config/api';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  Total=0;
  lEmptyCard:boolean=false;
  productAddedTocart:Product[];


  constructor(private _itemService:ProductService,
    private msg:MessengerService) { }

  ngOnInit(): void {
    this.productAddedTocart=this._itemService.getProductFromCart();
    if (this.productAddedTocart!=null)
    {
      if (this.productAddedTocart.length > 0)
      {
        this.lEmptyCard=true;
        this.CalculateTotal(this.productAddedTocart);
      }
    }
  }

  CalculateTotal(product:Product[]){
      return this._itemService.CalculateTotal(product)
  }
  CalculateSubTotal(product:Product): Number {
    return this._itemService.CalculateSubTotal(product);
  }

DeleteProduct(product:Product)
{

      this.productAddedTocart=this._itemService.getProductFromCart();
      this._itemService.DeleteProduct(product,this.productAddedTocart);
      this._itemService.removeAllProductFromCart();
      this._itemService.AddProductToCard(this.productAddedTocart);
      this.productAddedTocart=this._itemService.getProductFromCart();
      this.msg.sendMsg(this.productAddedTocart);
      this.CalculateTotal(this.productAddedTocart);
      this.msg.updateCartCount(this.productAddedTocart.length);


}

onAddQuantity(product:Product)
{

    this.productAddedTocart=this._itemService.getProductFromCart();
    this.productAddedTocart.find(p=>p.item_id==product.item_id).qty = +product.qty+1;
    this._itemService.removeAllProductFromCart();
    this._itemService.AddProductToCard(this.productAddedTocart);
    this.productAddedTocart=this._itemService.getProductFromCart();
    this.msg.sendMsg(this.productAddedTocart); //give refecne of localstorage
    this.CalculateTotal(this.productAddedTocart);

}
onRemoveQuantity(product:Product)
{
  if (product.qty > 1 )
  {
    this.productAddedTocart=this._itemService.getProductFromCart();
    this.productAddedTocart.find(p=>p.item_id==product.item_id).qty = product.qty-1;
    this._itemService.removeAllProductFromCart();
    this._itemService.AddProductToCard(this.productAddedTocart);
    this.productAddedTocart=this._itemService.getProductFromCart();
    this.msg.sendMsg(this.productAddedTocart); //give refecne of localstorage
    this.CalculateTotal(this.productAddedTocart);
  }
}



}
