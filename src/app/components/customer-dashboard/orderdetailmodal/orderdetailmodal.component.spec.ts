import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdetailmodalComponent } from './orderdetailmodal.component';

describe('OrderdetailmodalComponent', () => {
  let component: OrderdetailmodalComponent;
  let fixture: ComponentFixture<OrderdetailmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdetailmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdetailmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
