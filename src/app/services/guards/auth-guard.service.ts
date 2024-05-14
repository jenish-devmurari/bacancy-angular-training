import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private toaster: ToastrService, private localStorage: LocalStorageService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn) {
      const email = this.localStorage.getLoggedUserEmail();
      if (email) {
        const role = this.authService.getUserRole(email)
        if (role === 'Admin') {
          this.toaster.error("You can not go back you need to logout");
          this.router.navigate(['/admin/dashboard']);
          return false;
        } else if (role === "User") {
          this.toaster.error("You can not go back you need to logout");
          this.router.navigate(['/user/dashboard']);
          return false;
        } else {
          return false;
        }
      }
    }
    return true;
  }
}
