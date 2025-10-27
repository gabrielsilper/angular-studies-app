import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieResponse } from '../models/MovieResponse';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class MovieService {
  private baseUrl = 'https://imdb.iamidiotareyoutoo.com/';

  constructor(private http: HttpClient) {}

  getMovieDescriptions(movieName: string): Observable<MovieResponse> {
    const params = new HttpParams({
      fromObject: {
        q: movieName,
      },
    });

    return this.http
      .get<any>(this.baseUrl + '/search', { params })
      .pipe(map((data) => new MovieResponse(data)));
  }
}
