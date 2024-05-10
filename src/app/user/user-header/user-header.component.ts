import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent {

  constructor(private router: Router, private toaster: ToastrService) { }

  public logout(): void {
    const confirmLogout = confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      localStorage.removeItem('loggedIn');
      this.toaster.success('Logout Successful');
      this.router.navigate(['/login']);
    }
  }
}
