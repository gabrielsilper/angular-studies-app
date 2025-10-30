import { Component } from '@angular/core';
import { WishModule } from './wish/wish-module';
import { MovieModule } from './movie/movie-module';
import { Users } from "./users/users";
import { UsersModule } from './users/users-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [WishModule, MovieModule, UsersModule],
})
export class App {}
