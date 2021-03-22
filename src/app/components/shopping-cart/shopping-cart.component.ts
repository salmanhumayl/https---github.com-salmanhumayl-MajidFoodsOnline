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
    this.addCrowsel();


  }
  ngOnInit(): void {

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
              autoplayTimeout: 9000,
              items: 1,
              dots:true,
          });

  }

  }







}
