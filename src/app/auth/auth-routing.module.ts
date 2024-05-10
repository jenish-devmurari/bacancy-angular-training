import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from '../services/guards/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'register', component: RegisterComponent, pathMatch: 'full', canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
