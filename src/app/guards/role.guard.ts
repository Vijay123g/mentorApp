import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot     
  ): boolean {
    const requiredRole = route.data['role'] as string;
    const userRole = localStorage.getItem('role');

    if (userRole === requiredRole) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
