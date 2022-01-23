import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalTwoComponent } from './paypal-two.component';

describe('PaypalTwoComponent', () => {
  let component: PaypalTwoComponent;
  let fixture: ComponentFixture<PaypalTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
