import { Component, OnInit } from '@angular/core';
import { SpaceshipService } from './services/spaceship.service';
import { Spaceship } from './interfaces/spaceship';

@Component({
  selector: 'spaceship',
  templateUrl: 'partials/spaceships.html',
  styleUrls: ['css/spaceships.css'],
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