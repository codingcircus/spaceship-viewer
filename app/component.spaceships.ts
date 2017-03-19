import { Component, OnInit } from '@angular/core';
import { Spaceship } from './interfaces/spaceship';
import { SpaceshipService } from './services/spaceship.service';

@Component({
  selector: 'spaceship',
  templateUrl: 'partials/spaceships.html',
  styleUrls: [
    'css/top-bar.css',
    'css/spaceships.css',
  ],
  providers: [
    SpaceshipService
  ],
})

export class SpaceshipsComponent implements OnInit {
  spaceships: Spaceship[] = [];

  ngOnInit() {
    this._spaceshipService
      .getAll()
      .subscribe(spaceships => this.spaceships = spaceships);
  }

  constructor(private _spaceshipService : SpaceshipService) {}
}