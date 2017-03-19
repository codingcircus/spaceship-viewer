import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SpaceshipComponent } from './component.spaceship';
import { Spaceship } from './interfaces/spaceship';
import { SpaceshipService } from './services/spaceship.service';

@Component({
  selector: 'app',
  templateUrl: './partials/app.html',
  providers: [
    SpaceshipService
  ]
})

export class AppComponent implements OnInit {
  title: string; 
  author: string;
  spaceships: Spaceship[] = [];
  currentSpaceship: Spaceship;

  onClick(item, element) {
    console.log(item, element);
  }

  ngOnInit() {
    this._spaceshipService
      .getAll()
      .subscribe(spaceships => this.spaceships = spaceships);
  }

  constructor(private _spaceshipService : SpaceshipService) {
    this.title = "Spaceship Viewer";
    this.author = "Daniel Stein";
  }

  showSpaceship(item) {
    this.currentSpaceship = item;
  }
}