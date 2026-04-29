import { Component, input } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroCard } from "../hero-card/hero-card";
import { CommonModule } from '@angular/common';
import { HeroContainer } from '../../services/hero-container';

@Component({
  selector: 'app-hero-list',
  imports: [HeroCard, CommonModule],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {
  constructor(
    private heroes: HeroContainer
  ) {}

  heroList!: Hero[];
  totalCompleted!: number;

  ngOnInit() {
    this.heroList = this.heroes.getHeroes()
    this.totalCompleted = this.heroList.filter(h => h.completata).length;
  }


  handleCompleted(hero: Hero) {
    hero.completata = true;
    this.totalCompleted = this.heroList.filter(h => h.completata).length;
  }

}
