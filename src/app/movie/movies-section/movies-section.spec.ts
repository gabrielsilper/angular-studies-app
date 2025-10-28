import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSection } from './movies-section';

describe('MoviesSection', () => {
  let component: MoviesSection;
  let fixture: ComponentFixture<MoviesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
