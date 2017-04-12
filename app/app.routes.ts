import { RouterModule, Routes } from '@angular/router';
import { SpaceshipsComponent } from './component.spaceships';
import { SpaceshipDetailsComponent } from './component.spaceship-details';

const routes: Routes = [
  {
    path: 'spaceships',
    component: SpaceshipsComponent,
  },
  {
    path: 'spaceships/:id',
    component: SpaceshipDetailsComponent,
  },
  {
    path: '',
    redirectTo: '/spaceships',
    pathMatch: 'full',
  },
  {
    path: 'spaceships/add',
    component: SpaceshipsComponent,
  }
];

export const routing = RouterModule.forRoot(routes);