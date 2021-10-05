import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const AppRoutes = RouterModule.forRoot([
  {
    path: '**',
    component: NotFoundComponent
  }
], {
  initialNavigation: 'enabled',
});
