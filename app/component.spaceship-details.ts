import { Component, OnInit } from '@angular/core';
import { Spaceship } from './interfaces/spaceship';
import { SpaceshipService } from './services/spaceship.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'spaceship-details',
  templateUrl: 'partials/spaceship-details.html',
  styleUrls: [
    './css/top-bar.css',
    './css/card.css',
    './css/form.css',
  ],
  providers: [
    SpaceshipService
  ],
})

export class SpaceshipDetailsComponent implements OnInit {
  data: Spaceship = {
    id: 0,
    name: 'Loading …',
    pilot: 'Loading …',
    image: '',
    rating: 0,
  };
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this._spaceshipService.get(id)
        .subscribe(spaceship => this.data = spaceship);
    });
  }

  constructor(
    private _spaceshipService : SpaceshipService,
    private route: ActivatedRoute) {}
}