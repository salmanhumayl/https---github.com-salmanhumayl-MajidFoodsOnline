import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductService } from 'src/app/services/product.service';
declare const $:any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  inItems:Product;
  productAddedTocart:Product[];
  id:number;
  qty:number=1;
  Currentqty:number=0;

  constructor(private activeRoute:ActivatedRoute,
              private  _itemService:ProductService,
              private msg:MessengerService) {

                this.activeRoute.params.subscribe(
                  (params:Params) =>{
                      this.id=params.id;
                      this.GetProductsbyid();
                  }

              );

              }

  ngOnInit(): void {
 //   this.Subgallery();
   // this.GetProductsbyid();

  }



  Subgallery(){
    /*---single product activation---*/
    var $singleProductActive = $('.single-product-active');

    if($singleProductActive.length > 0){
    $('.single-product-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        margin:15,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsiveClass:true,
        responsive:{
                0:{
                items:1,
            },
            320:{
                items:2,
            },
            400:{
                items:3,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            },


          }
    });
}
  }

  GetProductsbyid()
  {
         this._itemService.GetProductsbyid(this.id).subscribe(

        (data)=>{
          this.inItems=data;


      },
      error => {
                 alert(error);

               }
      );
      //this.productitems=this._itemService.getProducts();
      //this.inItems=this.productitems.find(p=>p.item_id==this.id);

  }


  onAddQuantity(product:Product)
  {
    let productExits=false;
      this.productAddedTocart=this._itemService.getProductFromCart();
      for (let i in this.productAddedTocart)
      {
        if (this.productAddedTocart[i].item_id==this.id){
           this.productAddedTocart[i].qty= + this.productAddedTocart[i].qty+ +this.qty;
           productExits=true;
           break;
        }
      }
      if (!productExits)
      {

        if (this.productAddedTocart==null)
        {
          this.productAddedTocart=[];
        }

        this.productAddedTocart.push({
          item_id:this.id,
          item_description:product.item_description,
          item_price:product.item_price,
          oldprice:0,
          item_primary_thumb:product.item_primary_thumb,
          item_secondary_thumb:product.item_secondary_thumb,
          qty:this.qty,
          itemsimages:['assets/img/product01.png','assets/img/product01.png'],
          itemspecification:product.itemspecification

        }

        );
      }

        this._itemService.removeAllProductFromCart();
        this._itemService.AddProductToCard(this.productAddedTocart);
        this.productAddedTocart=this._itemService.getProductFromCart();



      this.msg.updateCartCount(this.productAddedTocart.length);
      this.msg.sendMsg(this.productAddedTocart); //give refecne of localstorage

      alert("Item Addedd....");

  }

}
