import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Admin } from '../interfaces/admin.interface';
import { Register } from '../interfaces/register.interface';
import { User } from '../interfaces/user.interface';
import { LocalStorageService } from './local-storage.service';
import { Roles } from '../constants/constants';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private toaster: ToastrService, private localStorage: LocalStorageService) { }

  public setRegistrationData(data: Register): boolean {
    if (this.isEmailRegister(data.email)) {
      this.toaster.error('This email is already register');
      return false
    } else {
      if (data.role === Roles.Admin) {
        this.addAdmin(data);
        return true
      } else {
        this.addUser(data);
        return true
      }
    }
  }

  public getRegistrationData(): Admin[] | null {
    const dataString = this.localStorage.getUserData();
    return dataString ? JSON.parse(dataString) : null;
  }

  // get admin list to show user for which admin present inside system
  public getAdminList(): string[] {
    const existingData: Admin[] = this.getRegistrationData() || [];
    const adminUsers: Admin[] = existingData.filter((user) => user.role === Roles.Admin);
    const adminEmails: string[] = adminUsers.map(user => user.email);
    return adminEmails;
  }

  // add admin
  private addAdmin(data: Register): void {
    const hashPassword = this.encrypt(data.password);
    let admin: Admin = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashPassword,
      confirmPassword: hashPassword,
      gender: data.gender,
      hobbies: data.hobbies,
      role: Roles.Admin,
      isActive: true,
      users: [],
    };
    let adminData: Admin[] = [];
    const localStorageData = this.localStorage.getUserData();
    if (localStorageData !== null) {
      adminData = JSON.parse(localStorageData);
    }
    adminData.push(admin);
    this.localStorage.setLocalStorage(adminData);
  }

  // add user 
  private addUser(data: Register): void {
    const adminEmail: string | undefined = data.adminList;
    const hashPassword = this.encrypt(data.password);
    if (!adminEmail) {
      return;
    }
    let user: User = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashPassword,
      confirmPassword: hashPassword,
      gender: data.gender,
      hobbies: data.hobbies,
      role: Roles.User,
      isActive: true,
      members: []
    };
    let adminData: Admin[] = [];
    const localStorageData = this.localStorage.getUserData();
    if (localStorageData !== null) {
      adminData = JSON.parse(localStorageData);
    }
    const adminIndex = adminData.findIndex(
      (admin) => admin.email === adminEmail
    );
    if (adminIndex !== -1) {
      adminData[adminIndex].users.push(user);
      this.localStorage.setLocalStorage(adminData);
    }
  }

  // check is email is register or not for admin and user registration
  private isEmailRegister(email: string): boolean {
    const localStorageData = this.localStorage.getUserData();
    if (localStorageData) {
      const adminData: Admin[] = JSON.parse(localStorageData);
      const adminWithEmail = adminData.some((admin) => admin.email === email);
      if (adminWithEmail) {
        return true;
      }
      for (const admin of adminData) {
        const userWithEmail = admin.users.some((user) => user.email === email);
        if (userWithEmail) {
          return true;
        }
      }
    }
    return false;
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, 'HelloFromWorld').toString();
  }

}
