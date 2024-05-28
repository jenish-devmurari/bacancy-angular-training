import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IAdmin } from '../interfaces/admin.model';
import { IRegister } from '../interfaces/register.model';
import { IUser } from '../interfaces/user.model';
import { LocalStorageService } from './local-storage.service';
import { Roles } from '../constants/constants';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private toaster: ToastrService, private localStorage: LocalStorageService) { }

  public setRegistrationData(data: IRegister): boolean {
    if (this.isEmailRegister(data.email)) {
      this.toaster.error('This email is already registered');
      return false;
    }
    if (data.role === Roles.Admin) {
      this.addAdmin(data);
    } else {
      this.addUser(data);
    }
    return true;
  }

  public getRegistrationData(): IAdmin[] | null {
    const dataString = this.localStorage.getUserData();
    return dataString ? JSON.parse(dataString) : null;
  }

  // get admin list to show user for which admin present inside system
  public getAdminList(): string[] {
    const existingData: IAdmin[] = this.getRegistrationData() || [];
    const adminEmails: string[] = existingData
      .filter((user) => user.role === Roles.Admin)
      .map(user => user.email);
    return adminEmails;
  }

  // add admin
  private addAdmin(data: IRegister): void {
    const hashPassword = this.encrypt(data.password);
    let admin: IAdmin = {
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
    let adminData: IAdmin[] = this.getRegistrationData() || [];
    adminData.push(admin);
    this.localStorage.setLocalStorage(adminData);
  }

  // add user 
  private addUser(data: IRegister): void {
    const adminEmail: string | undefined = data.adminList;
    const hashPassword = this.encrypt(data.password);
    if (!adminEmail) {
      this.toaster.error('Admin email is required to add a user.');
      return;
    }
    let user: IUser = {
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
    let adminData: IAdmin[] = this.getRegistrationData() || [];
    const adminIndex = adminData.findIndex(admin => admin.email === adminEmail);
    if (adminIndex !== -1) {
      adminData[adminIndex].users.push(user);
      this.localStorage.setLocalStorage(adminData);
    }
  }

  // check is email is register or not for admin and user registration
  private isEmailRegister(email: string): boolean {
    const adminData: IAdmin[] = this.getRegistrationData() || [];
    return adminData.some(admin =>
      admin.email === email || admin.users.some(user => user.email === email)
    );
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, 'HelloFromWorld').toString();
  }

}
