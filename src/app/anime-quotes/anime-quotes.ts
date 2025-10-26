import { Component } from '@angular/core';
import { QuoteCard } from "./quote-card/quote-card";

@Component({
  selector: 'app-anime-quotes',
  imports: [QuoteCard],
  templateUrl: './anime-quotes.html',
  styleUrl: './anime-quotes.css'
})
export class AnimeQuotes {

}
