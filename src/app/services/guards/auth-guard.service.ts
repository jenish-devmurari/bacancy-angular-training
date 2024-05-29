import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { LocalStorageService } from '../local-storage.service';
import { Roles } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private toaster: ToastrService, private localStorage: LocalStorageService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      const email = this.localStorage.getLoggedUserEmail();
      if (email) {
        const role = this.authService.getUserRole(email)
        if (role === Roles.Admin) {
          this.toaster.error("You can not go back you need to logout");
          this.router.navigate(['admin', 'dashboard']);
          return false;
        }
        if (role === Roles.User) {
          this.toaster.error("You can not go back you need to logout");
          this.router.navigate(['user', 'dashboard']);
          return false;
        }
      }
    }
    return true;
  }
}
