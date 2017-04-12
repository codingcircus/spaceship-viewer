import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Spaceship } from './interfaces/spaceship';
import { SpaceshipService } from './services/spaceship.service';
import { Router } from '@angular/router';
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

export class SpaceshipDeleteComponent implements OnInit, AfterViewChecked {
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
    private route: ActivatedRoute,
    private router: Router) {}

  onSubmit() {
    this._spaceshipService.delete(this.data._id)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}