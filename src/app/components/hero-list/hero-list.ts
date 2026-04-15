import { Component, input } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroCard } from "../hero-card/hero-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-list',
  imports: [HeroCard, CommonModule],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {
  heroList: Hero[] = [
    { id: 1, nome: 'Superman', potere: 'Super forza', completata: false },
    { id: 2, nome: 'Batman', potere: 'Intelligenza', completata: false },
  ]


  handleCompleted(hero: Hero) {
    hero.completata = true;
  }

}
