import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { HttpComponent } from './http/http.component';

const routes: Routes = [
  { path: 'dashboard', component: UserDashboardComponent, pathMatch: 'full' },
  { path: 'add-member', component: AddMemberComponent, pathMatch: 'full' },
  { path: 'http', component: HttpComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
