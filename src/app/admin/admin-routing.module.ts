import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: 'dashboard', component: AdminDashboardComponent, pathMatch: 'full' },
  { path: 'add-user', component: AddUserComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
