import { Routes } from '@angular/router';
import { Edit } from './components/edit/edit';
import { HeroCard } from './components/hero-card/hero-card';

export const routes: Routes = [
  { path: '', component: HeroCard },
  { path: 'edit/:id', component: Edit }
];
