import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermconditionsComponent } from './termconditions.component';

describe('TermconditionsComponent', () => {
  let component: TermconditionsComponent;
  let fixture: ComponentFixture<TermconditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermconditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
