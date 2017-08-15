// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

//this is the component decorator.  It contains the meta-data
@Component({
  selector: 'hero-detail',
  templateUrl:'./hero-detail.component.html'
})

//this is the component?
// @input items BIND child variables here to parent variables
// using the syntax [hero]="selectedHero" in the parent template area
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
  // end of HeroDetailComponent
}
