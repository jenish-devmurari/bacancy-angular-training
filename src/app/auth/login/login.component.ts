import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/interfaces/login.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private loginService: LoginService) {
  }

  public loginData: Login = {
    email: '',
    password: ''
  }

  public onSubmit(loginData: NgForm): void {
    this.loginService.login(loginData.form.value);
    this.resetForm();
  }

  private resetForm(): void {
    this.loginForm.reset();
  }
}
