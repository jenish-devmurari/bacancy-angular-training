import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentRoutingModule } from './payment-routing.module';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { DepositMoneyComponent } from './deposit-money/deposit-money.component';
import { WithdrawMoneyComponent } from './withdraw-money/withdraw-money.component';
import { DepositCoinsComponent } from './deposit-money/deposit-coins/deposit-coins.component';
import { DepositNotesComponent } from './deposit-money/deposit-notes/deposit-notes.component';
import { PaymentComponent } from './payment.component';


@NgModule({
  declarations: [
    CheckBalanceComponent,
    DepositMoneyComponent,
    WithdrawMoneyComponent,
    DepositCoinsComponent,
    DepositNotesComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule {

  constructor() {
  }

}
