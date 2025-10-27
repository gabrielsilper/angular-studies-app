import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie-service';
import { MovieResponse } from './models/MovieResponse';
import { MovieDescription } from './models/MovieDescription';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie implements OnInit {
  isLoading = true;

  descriptions!: MovieDescription[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService
      .getMovieDescriptions('Spiderman')
      .subscribe((movieResponse: MovieResponse) => {
        this.descriptions = movieResponse.description;
        this.isLoading = false;
      });
  }
}
