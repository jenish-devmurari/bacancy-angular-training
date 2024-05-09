import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService } from './services/guards/admin-guard.service';
import { UserGuardService } from './services/guards/user-guard.service';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'admin', canActivate: [AdminGuardService],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    pathMatch: 'prefix'
  },
  {
    path: 'user', canActivate: [UserGuardService],
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
