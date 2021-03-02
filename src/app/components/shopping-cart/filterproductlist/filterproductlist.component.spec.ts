import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterproductlistComponent } from './filterproductlist.component';

describe('FilterproductlistComponent', () => {
  let component: FilterproductlistComponent;
  let fixture: ComponentFixture<FilterproductlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterproductlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
