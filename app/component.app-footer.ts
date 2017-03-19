import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './partials/app-footer.html',
  styleUrls: ['css/app-footer.css'],
})

export class AppFooterComponent {
  count: string;
  constructor() {
    this.count = this.getCount();
  }

  getCount():string {
    return 'Counting …';
  }
}