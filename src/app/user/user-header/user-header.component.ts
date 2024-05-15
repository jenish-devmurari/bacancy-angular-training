import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  public name: string | null = '';

  constructor(private router: Router, private toaster: ToastrService, private localStorage: LocalStorageService) { }

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
