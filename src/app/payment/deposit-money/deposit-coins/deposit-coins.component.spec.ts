import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositCoinsComponent } from './deposit-coins.component';

describe('DepositCoinsComponent', () => {
  let component: DepositCoinsComponent;
  let fixture: ComponentFixture<DepositCoinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositCoinsComponent]
    });
    fixture = TestBed.createComponent(DepositCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
