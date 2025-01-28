import { LayoutComponent } from './core/layout/layout.component';
import { Routes } from '@angular/router';
import { inject } from "@angular/core";
import { map } from "rxjs/operators";

export const routes: Routes = [
   { path:'',
    component: LayoutComponent,
    children:[
       { path: '', loadComponent: () => import("./features/dashboard/dashboard.component").then(m => m.DashboardComponent), pathMatch: 'full' }
    ]}
];
