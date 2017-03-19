import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './partials/app-header.html',
  styleUrls: ['css/app-header.css'],
})

export class AppHeaderComponent {
  title: string;
  author: string;

  constructor() {
    this.title = 'Spaceship Viewer';
    this.author = 'Daniel Stein';
  }
}