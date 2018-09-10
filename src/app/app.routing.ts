import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { NotFoundComponent } from './core/not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const AppRoute: ModuleWithProviders = RouterModule.forRoot(appRoutes);
