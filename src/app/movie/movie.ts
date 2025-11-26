import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from './services/movie-service';
import { MovieResponse } from './models/MovieResponse';
import { MovieDescription } from './models/MovieDescription';
import { FormsModule } from '@angular/forms';
import { Loading } from './loading/loading';
import { MoviesSection } from './movies-section/movies-section';
import { SearchMovieForm } from './search-movie-form/search-movie-form';
import { MovieEventService } from './services/movie-event-service';

@Component({
  selector: 'app-movie',
  imports: [FormsModule, Loading, MoviesSection, SearchMovieForm],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class Movie implements OnInit, OnDestroy {
  isLoading = true;
  searchText: string = '';

  descriptions!: MovieDescription[];
  private subscription?: Subscription;

  constructor(private movieService: MovieService, private movieEvent: MovieEventService) {
    this.subscription = this.movieEvent.listen('search-movie', (event) => {
      this.searchMovie(event)
    });
  }

  ngOnInit() {
    this.movieService
      .getMovieDescriptions('Spiderman')
      .subscribe((movieResponse: MovieResponse) => {
        this.descriptions = movieResponse.description;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  searchMovie(movie: string) {
    this.isLoading = true;
    this.movieService.getMovieDescriptions(movie).subscribe((movieResponse: MovieResponse) => {
      this.descriptions = movieResponse.description;
      this.isLoading = false;
    });
  }
}
