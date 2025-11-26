import { Routes } from '@angular/router';
import { Wish } from './wish/wish';
import { Users } from './users/users';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { Movie } from './movie/movie';

export const routes: Routes = [
  { path: '', redirectTo: 'wish', pathMatch: 'full' },
  { path: 'wish', component: Wish },
  { path: 'movies', component: Movie },
  { path: 'users', component: Users },
  { path: '**', component: NotFoundPage },
];
