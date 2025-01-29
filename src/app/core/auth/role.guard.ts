import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Guard to check user role and restrict access to routes based on the role.
 */
export class RoleGuard implements CanActivate {
  constructor(
    private authService: AuthService = inject(AuthService),
    private router: Router = inject(Router)
  ) {}

  /**
   * Determines if a route can be activated based on the user's role.
   * @param route The activated route snapshot.
   * @param state The router state snapshot.
   * @returns A boolean indicating if the route can be activated.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = this.authService.userRole();

    if (!role) {
      this.router.navigate(['/login']);
      return false;
    }

    const url = state.url;

    // If the user tries to access /login, redirect them to the correct dashboard
    if (url === '/login') {
      this.router.navigate([role === 'admin' ? '/admin' : '/partner']);
      return false;
    }

    // Ensure the user accesses only the routes for their role
    if (
      (role === 'admin' && !url.startsWith('/admin')) ||
      (role === 'partner' && !url.startsWith('/partner'))
    ) {
      this.router.navigate([role === 'admin' ? '/admin' : '/partner']);
      return false;
    }

    return true;
  }
}
