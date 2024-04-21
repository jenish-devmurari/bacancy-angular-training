import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private route: Router) {
  }

  public userName: string = "";
  public passWord: string = "";

  public submitLogin(username: string, password: string): void {
    if (this.userName !== "" && this.passWord !== "") {
      this.authService.login(username, password);
      this.route.navigate(['post']);
    } else {
      alert("Please enter Your Credential")
    }
  }

}
