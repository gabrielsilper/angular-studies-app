import { Component, Input } from '@angular/core';
import { MovieDescription } from '../models/MovieDescription';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'movie-card-description',
  imports: [NgOptimizedImage],
  templateUrl: './movie-card-description.html',
  styleUrl: './movie-card-description.css',
})
export class MovieCardDescription {
  @Input() movieDescription!: MovieDescription;
}
