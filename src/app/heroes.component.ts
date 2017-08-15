//this is the core Angular code
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';  //this gives us access to the hero class
import { HeroService } from './hero.service'; //this gives us access to a DB
import { Router } from '@angular/router';


// this is the area where you configure your component
@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html'
})

// the real magic happens here in the component code.
// 'implements OnInit' gives us the ability to run the ngOnInit method
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // this constructor runs when the component gets created.
  // It adds a private HeroService object to the component
  constructor(private router: Router, private heroService: HeroService) { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // This special method is called when the component is initized
  // (created).  It acts like a constructor.  ngOnInit lifecycle
  // hook to get the hero data when the AppComponent activates.
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    //                               returned list  comp variable = return
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // This is an example call that is slowed down
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

// How arrow functions work
// old =      function addIt(event) { return event.value }
// version1 =               (event) => {return event.value}
//version2 =                 event => event.value

} //end of AppComponent
