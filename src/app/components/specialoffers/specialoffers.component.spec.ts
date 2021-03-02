import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialoffersComponent } from './specialoffers.component';

describe('SpecialoffersComponent', () => {
  let component: SpecialoffersComponent;
  let fixture: ComponentFixture<SpecialoffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialoffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
