import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-images-single',
  templateUrl: './product-images-single.component.html',
  styleUrls: ['./product-images-single.component.css']
})
export class ProductImagesSingleComponent implements OnInit {

  @Input() imgUrl: string;
  @Input() index: number;

  @Output() urlEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onHoverImage() {
    this.urlEvent.emit(this.imgUrl);
  }

}
