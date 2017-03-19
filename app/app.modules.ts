import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component.app';
import { SpaceshipComponent } from './component.spaceship';
import { SpaceshipDetailsComponent } from './component.spaceship-details';
import { AppHeaderComponent } from './component.app-header';
import { AppFooterComponent } from './component.app-footer';

import { SearchPipe } from './pipe.search';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  declarations: [
    AppComponent, 
    AppHeaderComponent,
    AppFooterComponent,
    SpaceshipComponent,
    SpaceshipDetailsComponent,
    SearchPipe,
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule {}