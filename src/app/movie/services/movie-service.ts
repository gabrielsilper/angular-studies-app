import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieResponse } from '../models/MovieResponse';

@Injectable({
  providedIn: 'any',
})
export class MovieService {
  private baseUrl = 'https://imdb.iamidiotareyoutoo.com/';

  constructor(private http: HttpClient) {}

  getMovieDescriptions(movieName: string) {
    const params = new HttpParams({
      fromObject: {
        q: movieName,
      },
    });

    return this.http.get<MovieResponse>(this.baseUrl + '/search', { params });
  }
}
