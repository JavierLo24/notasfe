import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: 'teacher',
    component: LayoutComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'teacher'
  }
];
