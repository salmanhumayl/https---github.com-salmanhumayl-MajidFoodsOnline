import { Component, OnInit,AfterViewInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit } from '@angular/core';
declare const $:any;

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements AfterViewInit,OnInit,AfterContentInit {

  constructor() {


   }
   ngAfterContentInit(){


   }

  ngAfterViewInit(){

    //this.AddProduct();
  //  this.BestSeller();
  //  this.BlogPost();
   // this.featureProduct();
    this.addCrowsel();
    this.brandArea();

  }
  ngOnInit(): void {
   // alert("shoppingh");
  //  this.addCrowsel();
  }

  addCrowsel()
  {

  var $slider = $('.slider_area');
      if($slider.length > 0){

          $slider.owlCarousel({
              animateOut: 'fadeOut',
              loop: true,
              nav: false,
              autoplay: true,
              autoplayTimeout: 6000,
              items: 1,
              dots:true,
          });

  }

  }



  BestSeller(){
    var $productColumn2 = $('.product_column2');
    if($productColumn2.length > 0){
       $productColumn2.on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 2,
        dots:false,
        margin: 30,
        navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
        responsiveClass:true,
        responsive:{
                0:{
                items:1,
            },
            768:{
                items:1,
            },
            992:{
                items:2,
            },
          }
    });
}
  }

  BlogPost(){
    /*---blog column3 activation---*/
    var $blogColumn3 = $('.blog_column3');
        if($blogColumn3.length > 0){
        $('.blog_column3').owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 3,
            dots:false,
            margin:30,
            navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
            responsiveClass:true,
            responsive:{
                    0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                 992:{
                    items:3,
                },
              }
        });
    }

  }
  featureProduct(){
    var $productColumn3 = $('.product_column3');
    if($productColumn3.length > 0){
        $productColumn3.on('changed.owl.carousel initialized.owl.carousel', function (event) {
            $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 3,
            dots:false,
            margin: 20,
            navText: ['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],
            responsiveClass:true,
            responsive:{
                    0:{
                    items:1,
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                },
              }
        });
    }
  }
  brandArea(){
     /*---brand container activation---*/
     var $brandContainer = $('.brand_container');
        if($brandContainer.length > 0){
         $('.brand_container').on('changed.owl.carousel initialized.owl.carousel', function (event) {
            $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
            loop: true,
            nav: false,
            autoplay: false,
            autoplayTimeout: 8000,
            items: 5,
             margin: 20,
            dots:false,
            responsiveClass:true,
            responsive:{
                    0:{
                    items:1,
                },
                300:{
                    items:2,
                    margin: 15,
                },
                480:{
                    items:3,
                },
                768:{
                    items:4,
                },
                992:{
                    items:5,
                },

              }
        });
    }

  }



}
