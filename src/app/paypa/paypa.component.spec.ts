import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypaComponent } from './paypa.component';

describe('PaypaComponent', () => {
  let component: PaypaComponent;
  let fixture: ComponentFixture<PaypaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
