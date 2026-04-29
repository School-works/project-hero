import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroContainer {
  protected list: Hero[] = [
    { id: 1, nome: 'Superman', potere: 'Super forza', completata: false },
    { id: 2, nome: 'Batman', potere: 'Intelligenza', completata: false }
  ];

  deleteHero(id: number) {
    this.list = this.list.filter(hero => hero.id !== id);
  }
  addHero(hero: Hero) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === hero.id) {
        return;
      }
    }
    this.list.push(hero);
  }
  getHeroes(): Hero[] {
    return this.list;
  }

  editHero(hero: Hero) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === hero.id) {
        this.list[i] = hero;
        return;
      }
    }
  }

  getHeroById(id: number): Hero | null {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        return this.list[i];
      }
    }
    return null;
  }
}
