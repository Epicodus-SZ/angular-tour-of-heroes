import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  //define an array to put heroes in
  heroes: Hero[] = [];

  //instantiates a heroService
  constructor(private heroService: HeroService) { }

  //gets hero data from service (first 4 heroes)
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
