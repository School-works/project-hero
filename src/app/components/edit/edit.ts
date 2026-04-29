import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NumberValueAccessor } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Hero } from '../../models/hero';
import { HeroContainer } from '../../services/hero-container';

@Component({
  selector: 'app-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class Edit implements OnInit {
  hero: Hero | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroes: HeroContainer
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      this.router.navigate(['']);
      return;
    }
    if (isNaN(Number(id))) {
      this.router.navigate(['']);
      return;
    }

    this.hero =this.heroes.getHeroById(Number(id));

    if (this.hero === null) {
      this.router.navigate(['']);
      return;
    }
  }

  saveHero() {
    if (this.hero) {
      this.router.navigate(['']);
    }
  }

  cancel() {
    this.router.navigate(['']);
  }
}
