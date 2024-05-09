import { Component } from '@angular/core';
import { Admin } from 'src/app/interfaces/admin.interface';
import { Member } from 'src/app/interfaces/member.interface';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {

  public memberData: Member[] | null = [];

  constructor() { }

  ngOnInit(): void {
    this.getUserData();
  }

  private getUserData(): void {
    const dataString = localStorage.getItem('Users');
    if (dataString) {
      const allAdmins: Admin[] = JSON.parse(dataString);
      const loggedInEmail = localStorage.getItem('loggedIn');
      for (const admin of allAdmins) {
        const user = admin.users.find(user => user.email === loggedInEmail);
        if (user) {
          this.memberData = user.members;
          break;
        }
      }
    }
  }
}
