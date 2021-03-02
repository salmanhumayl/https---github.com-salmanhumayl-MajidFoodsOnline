import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImagesSingleComponent } from './product-images-single.component';

describe('ProductImagesSingleComponent', () => {
  let component: ProductImagesSingleComponent;
  let fixture: ComponentFixture<ProductImagesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductImagesSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImagesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
