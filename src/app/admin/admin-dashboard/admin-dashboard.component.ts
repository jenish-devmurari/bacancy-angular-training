import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/interfaces/admin.interface';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  public loggedAdminData: Admin | null = null;
  public usersData: User[] | null = [];

  constructor(private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  private getUserData(): void {
    const dataString = localStorage.getItem('Users');
    if (dataString) {
      const allAdmins: Admin[] = JSON.parse(dataString);
      const loggedInEmail = localStorage.getItem('loggedIn');
      if (loggedInEmail) {
        this.loggedAdminData = allAdmins.find(admin => admin.email === loggedInEmail) || null;
        if (this.loggedAdminData) {
          this.usersData = this.loggedAdminData.users;
        }
      }
    }
  }

  public deleteUser(email: string) {
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

  public updateData(admin: Admin): void {
    const allAdmins: Admin[] = JSON.parse(localStorage.getItem('Users') || '[]');
    const index = allAdmins.findIndex(a => a.email === admin.email);
    if (index !== -1) {
      allAdmins[index] = admin;
      localStorage.setItem('Users', JSON.stringify(allAdmins));
    }
  }

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

}
