import { Injectable } from '@angular/core';
import { IAdmin } from '../interfaces/admin.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorage: LocalStorageService) { }

  public isLoggedIn(): boolean {
    return this.localStorage.getLoggedUserEmail() ? true : false
  }

  // get loggedIn role based on email
  public getUserRole(email: string): string | undefined {
    const adminData: IAdmin[] = this.localStorage.getUserData()
    for (const admin of adminData) {
      if (admin.email === email) {
        return admin.role;
      }
      const foundUser = admin.users.find(user => user.email === email);
      if (foundUser) {
        return foundUser.role;
      }
    }
    return undefined;
  }
}
