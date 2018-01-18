import { Component } from '@angular/core';

// import { Hero } from './hero';
import { HEROES } from './mock-heros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heros';
  // heros = ['Raja', 'Ramu', 'Siva', 'Anupriya'];
  heros = HEROES;
  myHero = this.heros[0];
}
