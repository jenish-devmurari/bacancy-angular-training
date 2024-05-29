import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private route: Router) {
  }

  public navigate() {
    this.route.navigate(['employee', '101', 'Jenish Devmurari', 'Full stack Developer'])
  }
}
