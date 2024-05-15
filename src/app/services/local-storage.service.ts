import { Injectable } from '@angular/core';
import { key, keyOfLoggedUser } from '../constants/constants';
import { Admin } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private key: string = key;
  private loggedIn: string = keyOfLoggedUser;
  constructor() { }

  public getLoggedUserEmail(): string {
    return localStorage.getItem(this.loggedIn) as string;
  }

  public getUserData(): string | null {
    return localStorage.getItem(this.key);;
  }

  public setLocalStorage(data: Admin[]): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  public setLoggedInUserEmail(email: string): void {
    localStorage.setItem(this.loggedIn, email);
  }

  public removeEmail(): void {
    localStorage.removeItem(this.loggedIn);
  }

  public getLoggedUserName(): string | null {
    const loggedInEmail = this.getLoggedUserEmail();
    const userData = JSON.parse(this.getUserData() || '[]');
    const mainUser = userData.find((user: { email: string; }) => user.email === loggedInEmail);
    if (mainUser) {
      return mainUser.firstName;
    }
    for (const admin of userData) {
      const user = admin.users.find((user: { email: string; }) => user.email === loggedInEmail);
      if (user) {
        return user.firstName;
      }
    }
    return null;
  }
}
