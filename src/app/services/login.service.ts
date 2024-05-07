import { Injectable } from '@angular/core';
import { Registration } from '../interfaces/registration.interface';
import { Login } from '../interfaces/login.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly registrationKey = 'Users';
  constructor(private route: Router) { }

  private getRegistrationData(): Registration[] | null {
    const dataString = localStorage.getItem(this.registrationKey);
    return dataString ? JSON.parse(dataString) : null;
  }

  public login(loginData: Login) {
    debugger
    const existingData: Registration[] = this.getRegistrationData() || [];
    const foundUser: Registration | undefined = existingData.find((user) => user.email === loginData.email);
    if (foundUser) {
      if (loginData.password === foundUser.password) {
        if (foundUser.role === "Admin") {
          console.log("Login Successfully");
          this.route.navigate(['/admin/dashboard']);
        }
        if (foundUser.role === "User") {
          if (foundUser.isActive === false) {
            console.log("Your account is inactive you can not login into system")
          }
          console.log("Login Successfully");
          this.route.navigate(['/user/dashboard']);
        }
      } else {
        console.log("Invalid Credentials");
      }
    } else {
      console.log("User not found Please Register");
    }
  }
}
