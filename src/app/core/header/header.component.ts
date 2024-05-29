import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Roles } from 'src/app/constants/constants';
import { IRegister } from 'src/app/interfaces/register.model';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public user: IRegister | undefined;
  public adminRole = Roles.Admin;
  public userRole = Roles.User;

  constructor(private router: Router, private toaster: ToastrService, private localStorage: LocalStorageService, private autService: AuthService) { }

  ngOnInit(): void {
    this.user = this.localStorage.getLoggedUser();
  }

  public logout(): void {
    if (confirm('Are you sure you want to log out?')) {
      this.localStorage.removeEmail();
      this.toaster.success('Logout Successful');
      this.router.navigate(['login']);
    }
  }
}
