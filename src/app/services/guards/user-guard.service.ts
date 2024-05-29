import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../local-storage.service';
import { Roles } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(private authService: AuthService, private route: Router, private toaster: ToastrService, private localStorage: LocalStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      const email = this.localStorage.getLoggedUserEmail();
      if (email) {
        const userRole = this.authService.getUserRole(email);
        if (userRole === Roles.User) {
          return true;
        } else {
          this.toaster.error("Unauthorize");
          this.route.navigate(['admin', 'dashboard']);
          return false;
        }
      } else {
        this.toaster.error("You Are Not Logged In. Please log in first.");
        this.route.navigate(['login']);
        return false;
      }
    } else {
      this.toaster.error("You Are Not Logged In. Please log in first.");
      this.route.navigate(['login']);
      return false;
    }
  }
}

