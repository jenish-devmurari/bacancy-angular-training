import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, pathMatch: 'prefix',
    children: [
      { path: 'dashboard', component: AdminDashboardComponent, pathMatch: 'full' },
      { path: 'add-user', component: AddUserComponent, pathMatch: 'full' },
    ]
  },
  { path: "**", redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
