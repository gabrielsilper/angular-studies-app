import { MovieDescription } from './MovieDescription';

export class MovieResponse {
  ok!: boolean;
  description!: MovieDescription[];
  errorCode!: number;

  constructor(data: any) {
    this.ok = data.ok;
    this.description = data.description.map((data: any) => new MovieDescription(data));
    this.errorCode = data.error_code;
  }
}
