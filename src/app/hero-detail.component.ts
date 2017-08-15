import { Component, Input } from '@angular/core';
import { Hero } from './hero';

//this is the component decorator.  It contains the meta-data
@Component({
  selector: 'hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  </div>
  `
})

//this is the component?
// @input items BIND child variables here to parent variables
// using the syntax [hero]="selectedHero" in the parent template area
export class HeroDetailComponent {
  @Input() hero: Hero;
}
