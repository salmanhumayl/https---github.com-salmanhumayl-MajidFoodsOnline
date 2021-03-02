import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingareaComponent } from './shippingarea.component';

describe('ShippingareaComponent', () => {
  let component: ShippingareaComponent;
  let fixture: ComponentFixture<ShippingareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
