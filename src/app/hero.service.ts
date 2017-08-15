import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    //confirm("Press a button!");
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    // 1. Runs a getHeroes method passing ID and returns all HEROES
    // 2. THEN when promised data returns, it does a find method on the resulting of heroes
    // 3. Find method results a function on it, to iterate through the array.
    // 4. The Find method returns WHERE the hero.id is equal to the passed original id
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

  // A purposely slowed down version.
  getHeroesSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 5000);
  });
}

}
