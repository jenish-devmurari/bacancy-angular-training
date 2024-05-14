import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login.interface';
import { Router } from '@angular/router';
import { Admin } from '../interfaces/admin.interface';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userFound: boolean = false;
  private readonly registrationKey = 'Users';

  constructor(private route: Router, private toaster: ToastrService, private localStorage: LocalStorageService) { }

  public login(loginData: Login): void {
    const existingData: Admin[] = this.getRegistrationData() || [];
    const foundAdmin = existingData.find((user) => user.email === loginData.email);
    if (foundAdmin) {
      if (foundAdmin && loginData.password === foundAdmin.password) {
        this.localStorage.setLoggedInUserEmail(foundAdmin.email);
        this.route.navigate(['/admin/dashboard']);
        this.toaster.success(`Welcome ${loginData.email}`);
        return;
      } else {
        this.toaster.error("Invalid credentials. Please try again.");
        return;
      }
    }
    for (const admin of existingData) {
      const foundUser = admin.users.find((user) => user.email === loginData.email);
      if (foundUser && foundUser.password === loginData.password) {
        if (foundUser.isActive) {
          this.localStorage.setLoggedInUserEmail(foundUser.email);
          this.route.navigate(['/user/dashboard']);
          this.toaster.success(`Welcome ${loginData.email}`);
          return;
        } else {
          this.toaster.error("Your account is inactive. You cannot log in.");
          return;
        }
      } else if (foundUser) {
        this.userFound = true;
      }
    }
    if (this.userFound) {
      this.toaster.error("Invalid credentials. Please try again.");
    } else {
      this.toaster.error("User not registered. Please register.");
    }
  }

  private getRegistrationData(): Admin[] | null {
    const dataString = this.localStorage.getUserData();
    return dataString ? JSON.parse(dataString) : null;
  }
}