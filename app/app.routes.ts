import { RouterModule, Routes } from '@angular/router';
import { SpaceshipsComponent } from './component.spaceships';

const routes: Routes = [
  {
    path: 'spaceships',
    component: SpaceshipsComponent,
  },
  {
    path: '',
    redirectTo: '/spaceships',
    pathMatch: 'full',
  }
];

export const routing = RouterModule.forRoot(routes);