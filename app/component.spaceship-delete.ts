import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Spaceship } from './interfaces/spaceship';
import { SpaceshipService } from './services/spaceship.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'spaceship-delete',
  templateUrl: 'partials/spaceship-delete.html',
  styleUrls: [
    './css/top-bar.css',
    './css/card.css',
    './css/form.css',
  ],
  providers: [
    SpaceshipService
  ],
})

export class SpaceshipDetailsComponent implements OnInit, AfterViewChecked {
  data: Spaceship = {
    _id: '0',
    name: 'Loading …',
    pilot: 'Loading …',
    image: '',
    rating: 0,
  };
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this._spaceshipService.get(id)
        .subscribe(spaceship => this.data = spaceship);
    });
  }

  ngAfterViewChecked() {
    
  }

  constructor(
    private _spaceshipService : SpaceshipService,
    private route: ActivatedRoute) {}

  onSubmit() {
    
  }
}