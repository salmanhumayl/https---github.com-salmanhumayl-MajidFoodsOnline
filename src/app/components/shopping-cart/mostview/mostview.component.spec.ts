import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostviewComponent } from './mostview.component';

describe('MostviewComponent', () => {
  let component: MostviewComponent;
  let fixture: ComponentFixture<MostviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
