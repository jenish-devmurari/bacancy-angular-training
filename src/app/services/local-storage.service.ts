import { Injectable } from '@angular/core';
import { Admin } from '../interfaces/admin.interface';
import { key, keyOfLoggedUser } from '../constants/constants';
import { delayWhen } from 'rxjs';

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
}
