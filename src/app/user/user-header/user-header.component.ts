import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent {

  constructor(private router: Router, private toaster: ToastrService) {
  }
  public logout() {
    localStorage.removeItem('loggedIn');
    this.toaster.success("Logout Successfully");
    this.router.navigate(['/login']);
  }
}
