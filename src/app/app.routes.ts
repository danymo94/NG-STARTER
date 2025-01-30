import { Role } from './core/auth/services/role.service';
import { Routes, CanActivate } from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { RoleGuard } from './core/auth/role.guard';

export const routes: Routes = [
  {
    path: 'admin',
    loadComponent: () =>
      import('./core/layout/layout.component').then((m) => m.LayoutComponent),
    canActivate: [RoleGuard],
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
    path: 'partner',
    loadComponent: () =>
      import('./core/layout/layout.component').then((m) => m.LayoutComponent),
    canActivate: [RoleGuard],

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
    loadComponent: () =>
      import('./core/auth/auth.component').then((m) => m.AuthComponent),
    canActivate: [RoleGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./core/auth/auth.component').then((m) => m.AuthComponent),
    canActivate: [RoleGuard],
  },
];
