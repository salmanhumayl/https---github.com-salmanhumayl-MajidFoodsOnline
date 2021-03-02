import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandareaComponent } from './brandarea.component';

describe('BrandareaComponent', () => {
  let component: BrandareaComponent;
  let fixture: ComponentFixture<BrandareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
