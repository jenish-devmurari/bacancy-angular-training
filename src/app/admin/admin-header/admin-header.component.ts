import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  public name: string | null = '';

  constructor(private router: Router, private toaster: ToastrService, private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.name = this.localStorage.getLoggedUserName();
  }

  public logout(): void {
    const confirmLogout = confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      this.localStorage.removeEmail();
      this.toaster.success('Logout Successful');
      this.router.navigate(['/login']);
    }
  }
}
