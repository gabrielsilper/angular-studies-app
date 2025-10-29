import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie-service';
import { MovieResponse } from './models/MovieResponse';
import { MovieDescription } from './models/MovieDescription';
import { FormsModule } from '@angular/forms';
import { Loading } from "./loading/loading";
import { MoviesSection } from './movies-section/movies-section';
import { SearchMovieForm } from "./search-movie-form/search-movie-form";

@Component({
  selector: 'app-movie',
  imports: [FormsModule, Loading, MoviesSection, SearchMovieForm],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie implements OnInit {
  isLoading = true;
  searchText: string = '';

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

  searchMovie() {
    this.isLoading = true;
    this.movieService
      .getMovieDescriptions(this.searchText)
      .subscribe((movieResponse: MovieResponse) => {
        this.descriptions = movieResponse.description;
        this.isLoading = false;
        this.searchText = '';
      });
  }
}
