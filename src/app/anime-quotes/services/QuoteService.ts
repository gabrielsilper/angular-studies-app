import { Observable } from 'rxjs';
import { Quote } from '../models/Quote';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'any' })
export class QuoteService {
  private readonly baseUrl: string = 'https://zenquotes.io/api';

  constructor() {}

  async getQuote(): Promise<Quote> {
    const response = await fetch(this.baseUrl + '/random');
    const json = await response.json();
    return json[0];
  }
}
