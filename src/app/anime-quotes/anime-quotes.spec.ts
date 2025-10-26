import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeQuotes } from './anime-quotes';

describe('AnimeQuotes', () => {
  let component: AnimeQuotes;
  let fixture: ComponentFixture<AnimeQuotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeQuotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeQuotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
