import { Component } from '@angular/core';

@Component({
  selector: 'app-hero.model',
  imports: [],
  templateUrl: './hero.model.html',
  styleUrl: './hero.model.css',
})
export class HeroModel {
notifyParent() {


}

hero: Hero = {
id: 1,
nome: 'Superman',
potere: 'Super forza',
completata: false
};
}

export interface Hero {
id: number;
nome: string;
potere: string;
completata: boolean;
}