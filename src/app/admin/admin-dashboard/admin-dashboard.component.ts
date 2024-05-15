import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { getGenderImageUrl } from 'src/app/constants/constants';
import { Admin } from 'src/app/interfaces/admin.interface';
import { User } from 'src/app/interfaces/user.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  public loggedAdminData: Admin | null = null;
  public usersData: User[] | null = [];

  constructor(private toaster: ToastrService, private localStorage: LocalStorageService) { }

  public ngOnInit(): void {
    this.getUserData();
  }

  // delete user 
  public deleteUser(email: string): void {
    if (confirm("Are you sure you want to delete?")) {
      if (this.loggedAdminData) {
        const index = this.loggedAdminData.users.findIndex(u => u.email === email);
        if (index !== -1) {
          this.loggedAdminData.users.splice(index, 1);
          this.updateData(this.loggedAdminData)
          this.toaster.success("User Deleted");
          this.getUserData();
        }
      }
    }
  }

  // update data based on changes
  public updateData(admin: Admin): void {
    const allAdmins: Admin[] = JSON.parse(this.localStorage.getUserData() || '[]');
    const index = allAdmins.findIndex(a => a.email === admin.email);
    if (index !== -1) {
      allAdmins[index] = admin;
      this.localStorage.setLocalStorage(allAdmins);
    }
  }

  // for active or inactive of user
  public activeToggle(email: string): void {
    if (this.loggedAdminData) {
      const index = this.loggedAdminData.users.findIndex(u => u.email === email);
      if (index !== -1) {
        this.loggedAdminData.users[index].isActive = !this.loggedAdminData.users[index].isActive;
        this.updateData(this.loggedAdminData);
        this.toaster.success("User Updated");
        this.getUserData();
      }
    }
  }

  // generate image based on gender
  public getGenderImage(gender: string): string {
    return getGenderImageUrl(gender);
  }

  // get user data of admin
  private getUserData(): void {
    const dataString = this.localStorage.getUserData();
    if (dataString) {
      const allAdmins: Admin[] = JSON.parse(dataString);
      const loggedInEmail = this.localStorage.getLoggedUserEmail();
      if (loggedInEmail) {
        this.loggedAdminData = allAdmins.find(admin => admin.email === loggedInEmail) || null;
        if (this.loggedAdminData) {
          this.usersData = this.loggedAdminData.users;
        }
      }
    }
  }
}
