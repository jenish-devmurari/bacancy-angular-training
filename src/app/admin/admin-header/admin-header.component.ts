import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  constructor(private router: Router, private toaster: ToastrService) {
  }
  public logout(): void {
    localStorage.removeItem('loggedIn');
    this.toaster.success("Logout Successfully");
    this.router.navigate(['/login']);
  }
}
