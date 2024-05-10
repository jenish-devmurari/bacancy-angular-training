import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private authService: AuthService, private route: Router, private toaster: ToastrService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn()) {
      const email = localStorage.getItem('loggedIn');
      if (email) {
        const userRole = this.authService.getUserRole(email);
        if (userRole === 'Admin') {
          return true;
        } else {
          this.toaster.error("Are you trying to access User but are you not User");
          this.route.navigate(['/login']);
          localStorage.removeItem('loggedIn');
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
