import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroCardComponent } from './components/hero.card.component/hero.card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-hero');
}
