import { Component, OnInit } from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from '../hero';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  
  heroes: Hero[];

  constructor(private herService: HeroService) { }

  getHeroes(): void{
    // this.heroes = this.herService.getHeroesRaw();
    this.herService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}
