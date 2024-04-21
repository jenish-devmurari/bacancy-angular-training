import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRouteSnapshot, CanActivateChild, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthChildGuard implements CanActivateChild {

    constructor(private authService: AuthService, private router: Router) { }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            alert("You Are Not Allowed To this Page This Page Access First You need to login ")
            this.router.navigate(['/login']);
            return false;
        }
    }
}