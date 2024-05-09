import { Injectable } from '@angular/core';
import { Admin } from '../interfaces/admin.interface';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { Member } from '../interfaces/member.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly registrationKey = 'Users';
  constructor(private router: Router, private toaster: ToastrService) { }

  public setRegistrationData(data: any): boolean {
    if (this.isEmailRegister(data.email)) {
      this.toaster.error('This email is already register');
      return false
    } else {
      if (data.role === 'Admin') {
        this.addAdmin(data);
        return true
      } else {
        this.addUser(data);
        return true
      }
    }
  }

  public getRegistrationData(): Admin[] | null {
    const dataString = localStorage.getItem(this.registrationKey);
    return dataString ? JSON.parse(dataString) : null;
  }

  // get admin list to show user for which admin present inside system
  public getAdminList(): string[] {
    const existingData: Admin[] = this.getRegistrationData() || [];
    const adminUsers: Admin[] = existingData.filter((user) => user.role === 'Admin');
    const adminEmails: string[] = adminUsers.map(user => `${user.email}`);
    return adminEmails;
  }

  // add admin
  private addAdmin(data: Admin): void {
    let admin: Admin = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      gender: data.gender,
      hobbies: data.hobbies,
      role: 'Admin',
      isActive: true,
      users: [],
    };
    let adminData: Admin[] = [];
    const localStorageData = localStorage.getItem(this.registrationKey);
    if (localStorageData !== null) {
      adminData = JSON.parse(localStorageData);
    }
    adminData.push(admin);
    localStorage.setItem(this.registrationKey, JSON.stringify(adminData));
  }

  // add user 
  private addUser(data: any): void {
    const adminEmail: string | null = data.adminList;
    if (!adminEmail) {
      return;
    }
    let user: User = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      gender: data.gender,
      hobbies: data.hobbies,
      role: 'User',
      isActive: true,
      members: []
    };
    let adminData: Admin[] = [];
    const localStorageData = localStorage.getItem(this.registrationKey);
    if (localStorageData !== null) {
      adminData = JSON.parse(localStorageData);
    }
    const adminIndex = adminData.findIndex(
      (admin) => admin.email === adminEmail
    );
    if (adminIndex !== -1) {
      adminData[adminIndex].users.push(user);
      localStorage.setItem(this.registrationKey, JSON.stringify(adminData));
    }
  }

  // check is email is register or not for admin and user registration
  private isEmailRegister(email: string): boolean {
    const localStorageData = localStorage.getItem(this.registrationKey);
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
}
