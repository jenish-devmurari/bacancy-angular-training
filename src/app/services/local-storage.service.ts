import { Injectable } from '@angular/core';
import { key, keyOfLoggedUser } from '../constants/constants';
import { IAdmin } from '../interfaces/admin.model';
import { IRegister } from '../interfaces/register.model';
import { IUser } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private key: string = key;
  private loggedIn: string = keyOfLoggedUser;

  public getLoggedUserEmail(): string | undefined {
    return localStorage.getItem(this.loggedIn) as string;
  }

  public getUserData(): IAdmin[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  public setLocalStorage(data: IAdmin[]): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  public setLoggedInUserEmail(email: string): void {
    localStorage.setItem(this.loggedIn, email);
  }

  public removeEmail(): void {
    localStorage.removeItem(this.loggedIn);
  }

  public getLoggedUser(): IRegister | undefined {
    const email: string | undefined = this.getLoggedUserEmail();
    if (!email) {
      return undefined;
    }
    const adminData: IAdmin[] = this.getUserData();
    for (const admin of adminData) {
      if (admin.email === email) {
        return admin;
      }
      const user: IUser | undefined = admin.users?.find(user => user.email === email);
      if (user) {
        return user;
      }
    }
    return undefined;
  }
}
