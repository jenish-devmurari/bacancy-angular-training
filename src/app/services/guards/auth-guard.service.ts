import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private toaster: ToastrService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    if (isLoggedIn) {
      const email = localStorage.getItem('loggedIn');
      if (email) {
        const role = this.authService.getUserRole(email)
        if (role === 'Admin') {
          this.toaster.error("You can not go back you need to logout")
          this.router.navigate(['/admin/dashboard']);
          return false;
        } else if (role === "User") {
          this.toaster.error("You can not go back you need to logout")
          this.router.navigate(['/user/dashboard']);
          return false;
        } else {
          return false
        }
      }
    }
    return true;
  }
}
