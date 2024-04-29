import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from '../services/guards/auth-guard.service';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'prefix', canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
