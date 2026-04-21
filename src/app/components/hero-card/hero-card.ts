import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../../models/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {
  @Input() hero!: Hero;
  @Output() onCompleted = new EventEmitter<Hero>();

  constructor(private router: Router) {}

  triggerCompleted() {
    this.onCompleted.emit(this.hero);
  }

  switchPage(page: string) {
    this.router.navigate([page, this.hero.nome]);
  }
}
