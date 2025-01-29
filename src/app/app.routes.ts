import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { RoleGuard } from './core/auth/role.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./core/auth/auth.component').then((m) => m.AuthComponent),
    canActivate: [],
  },
  {
    path: 'register',
    loadComponent: () => import('./core/auth/auth.component').then((m) => m.AuthComponent),
    canActivate: [],
  },
];
