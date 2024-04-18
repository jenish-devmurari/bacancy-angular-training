import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { DepositMoneyComponent } from './deposit-money/deposit-money.component';
import { WithdrawMoneyComponent } from './withdraw-money/withdraw-money.component';
import { DepositCoinsComponent } from './deposit-money/deposit-coins/deposit-coins.component';
import { DepositNotesComponent } from './deposit-money/deposit-notes/deposit-notes.component';
import { PaymentComponent } from './payment.component';

const routes: Routes = [
  {
    path: '', component: PaymentComponent, pathMatch: 'prefix',
    children: [
      { path: 'check-balance', component: CheckBalanceComponent },
      {
        path: 'deposit-money', component: DepositMoneyComponent, pathMatch: 'prefix',
        children: [
          { path: 'deposit-coins', component: DepositCoinsComponent },
          { path: 'deposit-notes', component: DepositNotesComponent }
        ]
      },
      { path: 'withdraw-money', component: WithdrawMoneyComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
