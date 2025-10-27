import { Component, OnInit } from '@angular/core';
import { QuoteCard } from './quote-card/quote-card';
import { Quote } from './models/Quote';
import { QuoteService } from './services/QuoteService';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-anime-quotes',
  imports: [QuoteCard, HttpClientModule],
  templateUrl: './anime-quotes.html',
  styleUrl: './anime-quotes.css',
})
export class AnimeQuotes implements OnInit {
  public quote!: Quote;
  public isLoading = true;

  constructor(private quoteService: QuoteService) {}

  async ngOnInit(): Promise<void> {
    const quoteResponse = await this.quoteService.getQuote()

    console.log(quoteResponse);
    
    this.isLoading = false;
  }
}
