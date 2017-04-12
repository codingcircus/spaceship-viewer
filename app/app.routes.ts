import { RouterModule, Routes } from '@angular/router';
import { SpaceshipsComponent } from './component.spaceships';
import { SpaceshipDetailsComponent } from './component.spaceship-details';
import { SpaceshipAddComponent } from './component.spaceship-add'; 

const routes: Routes = [
  {
    path: 'spaceships/add',
    component: SpaceshipAddComponent,
  },
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
];

export const routing = RouterModule.forRoot(routes);