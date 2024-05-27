import { Injectable } from '@angular/core';
import { IAdmin } from '../interfaces/admin.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorage: LocalStorageService) { }

  public isLoggedIn(): boolean {
    const email = this.localStorage.getLoggedUserEmail();
    if (email) {
      return true;
    }
    return false;
  }

  // get loggedIn role based on email
  public getUserRole(email: string): string {
    const localStorageData = this.localStorage.getUserData();
    if (localStorageData) {
      const adminData: IAdmin[] = JSON.parse(localStorageData);
      const foundAdminData = adminData.find((admin) => admin.email === email);
      if (foundAdminData) {
        return foundAdminData.role;
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
