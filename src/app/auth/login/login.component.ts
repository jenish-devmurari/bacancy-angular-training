import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ILogin } from 'src/app/interfaces/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private loginService: LoginService, private toaster: ToastrService) {
  }

  public loginData: ILogin = {
    email: '',
    password: ''
  }

  public onSubmit(loginData: NgForm): void {
    if (this.loginForm.valid) {
      this.loginService.login(loginData.form.value);
      this.loginForm.reset();
    } else {
      this.toaster.error("Please fill out the login detail.");
    }
  }

}
