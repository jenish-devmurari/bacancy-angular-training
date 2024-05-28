import { Injectable } from '@angular/core';
import { IAdmin } from '../interfaces/admin.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorage: LocalStorageService) { }

  public isLoggedIn(): boolean {
    const email: string | undefined = this.localStorage.getLoggedUserEmail();
    if (email) {
      return true;
    }
    return false;
  }

  // get loggedIn role based on email
  public getUserRole(email: string): string | null {
    const localStorageData = this.localStorage.getUserData();
    if (!localStorageData) {
      return null;
    }
    const adminData: IAdmin[] = JSON.parse(localStorageData);
    for (const admin of adminData) {
      if (admin.email === email) {
        return admin.role;
      }
      const foundUser = admin.users.find(user => user.email === email);
      if (foundUser) {
        return foundUser.role;
      }
    }
    return null;
  }
}
