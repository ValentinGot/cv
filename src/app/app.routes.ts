import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes, {
  initialNavigation: 'enabled',
});
