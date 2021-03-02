import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit {
  @Input() items1: Product;

  constructor() { }

  ngOnInit(): void {
  }

  urlChange(newUrl: string) {
    // alert(newUrl);
     this.items1.item_primary_thumb = newUrl;
   }

}
