import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mentorApp';
  constructor(private router:Router){

  }
  showHeader(): boolean {
    return !(this.router.url === '/login' || this.router.url === '/signup');
  }
}
