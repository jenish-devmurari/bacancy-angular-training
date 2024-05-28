import { Component } from '@angular/core';
import { getGenderImageUrl } from 'src/app/constants/constants';
import { IAdmin } from 'src/app/interfaces/admin.model';
import { IMember } from 'src/app/interfaces/member.model';

import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  public memberData: IMember[] | null = [];

  constructor(private localStorage: LocalStorageService) { }

  public ngOnInit(): void {
    this.getUserData();
  }

  // Get image based on gender to show in card
  public getGenderImage(gender: string): string {
    return getGenderImageUrl(gender);
  }

  // Get member data from local storage based on particular user
  private getUserData(): void {
    const allAdmins: IAdmin[] = this.localStorage.getUserData()
    const loggedInEmail: string | undefined = this.localStorage.getLoggedUserEmail();
    for (const admin of allAdmins) {
      const user = admin.users.find(user => user.email === loggedInEmail);
      if (user) {
        this.memberData = user.members;
        break;
      }
    }
  }
}

