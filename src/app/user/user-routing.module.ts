import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { HttpComponent } from './http/http.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, pathMatch: 'prefix',
    children: [
      { path: 'dashboard', component: UserDashboardComponent, pathMatch: 'full' },
      { path: 'add-member', component: AddMemberComponent, pathMatch: 'full' },
      { path: 'http', component: HttpComponent, pathMatch: 'full' }
    ]
  },
  { path: "**", redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
