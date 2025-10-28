import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCardDescription } from './movie-card-description';


describe('MovieCardDescription', () => {
  let component: MovieCardDescription;
  let fixture: ComponentFixture<MovieCardDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCardDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
