import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';
import { AppComponent } from './component.app';
import { SpaceshipsComponent } from './component.spaceships';
import { SpaceshipDetailsComponent } from './component.spaceship-details';
import { AppHeaderComponent } from './component.app-header';

import { SearchPipe } from './pipe.search';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
  ],
  declarations: [
    AppComponent, 
    AppHeaderComponent,
    SpaceshipsComponent,
    SpaceshipDetailsComponent,
    SearchPipe,
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule {}