import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent,pathMatch :'prefix'},
  {path: 'register', component: RegisterComponent,pathMatch :'prefix'},
  {path: 'logout', component: LoginComponent,pathMatch :'prefix'},
  {path: 'forgot-password', component: ForgotPasswordComponent,pathMatch :'prefix'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
