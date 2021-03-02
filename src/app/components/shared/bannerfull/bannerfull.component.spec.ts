import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerfullComponent } from './bannerfull.component';

describe('BannerfullComponent', () => {
  let component: BannerfullComponent;
  let fixture: ComponentFixture<BannerfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
