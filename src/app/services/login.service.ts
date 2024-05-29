import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { ToastrService } from 'ngx-toastr';
import { IAdmin } from '../interfaces/admin.model';
import { ILogin } from '../interfaces/login.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userFound: boolean = false;

  constructor(private route: Router, private toaster: ToastrService, private localStorage: LocalStorageService) { }

  public login(loginData: ILogin): void {
    const existingData: IAdmin[] = this.localStorage.getUserData();
    const foundAdmin = existingData.find((user) => user.email === loginData.email);
    if (foundAdmin) {
      if (foundAdmin && loginData.password === this.decrypt(foundAdmin.password)) {
        this.localStorage.setLoggedInUserEmail(foundAdmin.email);
        this.route.navigate(['admin', 'dashboard']);
        this.toaster.success(`Welcome ${loginData.email}`);
        return;
      } else {
        this.toaster.error("Invalid credentials. Please try again.");
        return;
      }
    }
    for (const admin of existingData) {
      const foundUser = admin.users.find((user) => user.email === loginData.email);
      if (foundUser && this.decrypt(foundUser.password) === loginData.password) {
        if (foundUser.isActive) {
          this.localStorage.setLoggedInUserEmail(foundUser.email);
          this.route.navigate(['user', 'dashboard']);
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

  private decrypt(txtToDecrypt: string): string {
    return CryptoJS.AES.decrypt(txtToDecrypt, 'HelloFromWorld').toString(CryptoJS.enc.Utf8);
  }
}