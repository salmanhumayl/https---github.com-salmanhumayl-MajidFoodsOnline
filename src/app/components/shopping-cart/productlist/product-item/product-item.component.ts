import { Component, OnInit,Input,OnChanges, AfterViewInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import{Product} from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare const $:any;

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit,AfterViewInit {

  @Input() productitem:Product;
  @Input() index:number;
  cartItems:Product[]=[];
  isViewLoading:boolean=false;


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }

    },
    nav: true
  }


  constructor(private _itemService:ProductService,
              private msg:MessengerService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
   // this.AddProduct();


    }

    ngDoCheck(){
     // this.AddProduct();
     //navText: ['Previous', 'Next'],
      }

    ngOnChanges() : void
      {

      }

  addProductToCart1(product:Product){

    let ProductExit=false;
    this.cartItems=this._itemService.getProductFromCart();

    if (this.cartItems==null)
    {
      this.cartItems=[];
      this.cartItems.push(product);
      this._itemService.AddProductToCard(this.cartItems);

    }
    else
    {
      let tempProduct=this.cartItems.find(p=>p.item_id==product.item_id)
        if (tempProduct==null)
        {
          this.cartItems.push(product);
          this._itemService.AddProductToCard(this.cartItems);

        }
        else
        {
            alert("Product already exist in cart.")

        }

    }

    this.msg.updateCartCount(this.cartItems.length);

    this.msg.sendMsg(this.cartItems); //give refecne of localstorage

  }

  addProductToCart(product:Product){

    this.isViewLoading=true;
    let productExits=false;
    this.cartItems=this._itemService.getProductFromCart();


      for (let i in this.cartItems)
      {
        if (this.cartItems[i].item_id===product.item_id){
          this.cartItems[i].qty++
          this._itemService.removeAllProductFromCart();
          this._itemService.AddProductToCard(this.cartItems);
          productExits=true;
          break;
        }
      }
        if (!productExits)
        {

          if (this.cartItems==null)
          {
            this.cartItems=[];
          }
          product.qty=1;
          this.cartItems.push(product);
          this._itemService.removeAllProductFromCart();
          this._itemService.AddProductToCard(this.cartItems);

        }

    setTimeout(() => {
      this.isViewLoading=false;
    }, 1000);

    this.msg.updateCartCount(this.cartItems.length);

    this.msg.sendMsg(this.cartItems);


  }


  AddProduct(){
    var $porductColumn5 =  $('.product_column5');
    alert('salman');
    if($porductColumn5.length > 0){
      alert($porductColumn5.length);
        $porductColumn5.on('changed.owl.carousel initialized.owl.carousel', function (event) {
            $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            loop: true,
            rewind: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 5,
            margin: 20,
            dots:false,
            navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
            responsiveClass:true,
            responsive:{
                    0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                768:{
                    items:3,
                },
                992:{
                    items:4,
                },
                1200:{
                    items:5,
                },

              }
        });
    }



  }

}
