import { Component } from '@angular/core';

import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2> {{master}} controls {{heroes.length}} childerns</h2>
    <app-hero-child *ngFor = "let hero of heroes"
      [hero] = "hero"
      [master] = "Master">
    </app-hero-child>
  `,
  styles: []
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
}
