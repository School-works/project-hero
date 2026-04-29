import { Routes } from '@angular/router';
import { Edit } from './components/edit/edit';
import { HeroList } from './components/hero-list/hero-list';

export const routes: Routes = [
  { path: '', component: HeroList },
  { path: 'edit/:id', component: Edit }
];
