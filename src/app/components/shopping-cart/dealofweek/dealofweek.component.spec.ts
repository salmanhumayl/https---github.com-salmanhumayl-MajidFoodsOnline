import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealofweekComponent } from './dealofweek.component';

describe('DealofweekComponent', () => {
  let component: DealofweekComponent;
  let fixture: ComponentFixture<DealofweekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealofweekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealofweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
