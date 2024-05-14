import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../local-storage.service';

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
        if (userRole === 'User') {
          return true;
        } else {
          this.toaster.error("Are you trying to access Admin but are you not Admin.");
          this.route.navigate(['/login']);
          this.localStorage.removeEmail();
          return false;
        }
      } else {
        this.toaster.error("You Are Not Logged In. Please log in first.");
        this.route.navigate(['/login']);
        return false;
      }
    } else {
      this.toaster.error("You Are Not Logged In. Please log in first.");
      this.route.navigate(['/login']);
      return false;
    }
  }
}

