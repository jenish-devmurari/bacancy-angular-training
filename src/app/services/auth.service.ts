import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticate: boolean = false;

  public login(username: string, password: string): boolean {
    return this.isAuthenticate = true;
  }

  public logout(): void {
    this.isAuthenticate = false;
  }

  public isAuthenticated(): boolean {
    return this.isAuthenticate;
  }
}
