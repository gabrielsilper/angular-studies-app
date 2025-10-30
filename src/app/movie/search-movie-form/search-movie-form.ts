import { Component } from '@angular/core';
import { MovieEventService } from '../services/movie-event-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search-movie-form',
  imports: [FormsModule],
  templateUrl: './search-movie-form.html',
  styleUrl: './search-movie-form.css',
})
export class SearchMovieForm {
  searchTextMovie = '';

  constructor(private movieEvent: MovieEventService) {}

  searchMovie() {
    this.movieEvent.publish({
      eventName: 'search-movie',
      payload: this.searchTextMovie,
    });
    this.searchTextMovie = '';
  }
}
