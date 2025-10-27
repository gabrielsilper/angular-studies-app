export class MovieDescription {
  title!: string;
  year!: number;
  imdbId!: string;
  rank!: number;
  actors!: string;
  aka!: string;
  imdbUrl!: string;
  imdbIv!: string;
  imgPoster!: string;
  photoWidth!: number;
  photoHeight!: number;

  constructor(data: any) {
    this.title = data['#TITLE'];
    this.year = data['#YEAR'];
    this.imdbId = data['#IMDB_ID'];
    this.rank = data['#RANK'];
    this.actors = data['#ACTORS'];
    this.aka = data['#AKA'];
    this.imdbUrl = data['#IMDB_URL'];
    this.imdbIv = data['#IMDB_IV'];
    this.imgPoster = data['#IMG_POSTER'];
    this.photoWidth = data['photo_width'];
    this.photoHeight = data['photo_height'];
  }
}
