import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerareaComponent } from './bannerarea.component';

describe('BannerareaComponent', () => {
  let component: BannerareaComponent;
  let fixture: ComponentFixture<BannerareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
