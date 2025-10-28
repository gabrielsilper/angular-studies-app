import { Component, Input } from '@angular/core';
import { MovieDescription } from '../models/MovieDescription';
import { MovieCardDescription } from '../movie-card-description/movie-card-description';

@Component({
  selector: 'movies-section',
  imports: [MovieCardDescription],
  templateUrl: './movies-section.html',
  styleUrl: './movies-section.css'
})
export class MoviesSection {
  @Input() movieDescriptions!: MovieDescription[]
}
