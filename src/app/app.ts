import { Component } from '@angular/core';
import { WishModule } from './wish/wish-module';
import { AnimeQuotesModule } from './anime-quotes/anime-quotes-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [WishModule, AnimeQuotesModule],
})
export class App {}
