import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private userService: UserService) {}

  public logout() {
    this.userService.logout()
  }

  public isLoggedIn() {
    return this.userService.isAuthenticated();
  }
}
