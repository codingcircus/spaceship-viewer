import { RouterModule, Routes } from '@angular/router';
import { SpaceshipsComponent } from './component.spaceships';
import { SpaceshipDetailsComponent } from './component.spaceship-details';
import { SpaceshipAddComponent } from './component.spaceship-add'; 
import { SpaceshipDeleteComponent } from './component.spaceship-delete'; 

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
    path: 'spaceships/:id/delete',
    component: SpaceshipDeleteComponent,
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