import { Injectable } from '@angular/core';
import {  Observable, of } from "rxjs";
import {Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { MessageService } from "../utils/messages/message.service";


// https://angular.io/tutorial/toh-pt4
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }


  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    
    //Note the backticks ( ` ) that define a JavaScript template literal for embedding the id.
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeroesRaw(): Hero[] {
    return HEROES;
  }
}
