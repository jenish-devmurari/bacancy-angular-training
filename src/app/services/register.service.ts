import { Injectable } from '@angular/core';
import { Registration } from '../interfaces/registration.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly registrationKey = 'Users';
  constructor() { }

  public setRegistrationData(data: Registration): void {
    debugger
    const existingData: Registration[] = this.getRegistrationData() || [];
    const isRegister = existingData.some(existing => existing.email === data.email);
    if (isRegister) {
      console.log("Email is already register");
      return;
    }
    data.id = existingData.length;
    existingData.push(data);
    localStorage.setItem(this.registrationKey, JSON.stringify(existingData));
  }

  public getRegistrationData(): Registration[] | null {
    const dataString = localStorage.getItem(this.registrationKey);
    return dataString ? JSON.parse(dataString) : null;
  }

  public getAdminList(): string[] {
    const existingData: Registration[] = this.getRegistrationData() || [];
    const adminUsers: Registration[] = existingData.filter((user) => user.role === 'Admin');
    const adminNames: string[] = adminUsers.map(user => `${user.firstName} ${user.lastName}`);
    return adminNames;
  }

}
