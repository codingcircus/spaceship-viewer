import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SpaceshipService } from './services/spaceship.service';

@Component({
  selector: 'spaceship-add',
  templateUrl: 'partials/spaceship-add.html',
  styleUrls: [
    './css/top-bar.css',
    './css/card.css',
    './css/form.css',
  ],
  providers: [
    SpaceshipService
  ],
})
export class SpaceshipAddComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private _spaceshipService : SpaceshipService) {
      
    }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      pilot: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      image: this.formBuilder.control(''),
      rating: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]+')
      ]))
    });
  }

  onSubmit(spaceship) {
    console.log(spaceship);
  }
}