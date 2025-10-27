import { NgModule } from '@angular/core';
import { Movie } from './movie';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers:[provideHttpClient()],
  imports: [Movie],
  exports: [Movie],
})
export class MovieModule {}
