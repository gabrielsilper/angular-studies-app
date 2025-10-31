import { Component } from '@angular/core';
import { WishModule } from './wish/wish-module';
import { MovieModule } from './movie/movie-module';
import { UsersModule } from './users/users-module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [WishModule, MovieModule, UsersModule, RouterOutlet],
})
export class App {}
