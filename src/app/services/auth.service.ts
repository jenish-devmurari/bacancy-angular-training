import { Injectable } from '@angular/core';
import { Admin } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isLoggedIn(): boolean {
    const email = localStorage.getItem('loggedIn');
    if (email) {
      return true;
    }
    return false;
  }

  public getUserRole(email: string): string {
    const localStorageData = localStorage.getItem('Users');
    if (localStorageData) {
      const adminData: Admin[] = JSON.parse(localStorageData);
      const foundAdminData = adminData.find((admin) => admin.email === email);
      if (foundAdminData) {
        return foundAdminData.role
      }
      for (const admin of adminData) {
        const foundUserData = admin.users.find((user) => user.email === email);
        if (foundUserData) {
          return foundUserData.role;
        }
      }
    }
    return "";
  }
}
