import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloCard } from './hello-card';

describe('HelloCard', () => {
  let component: HelloCard;
  let fixture: ComponentFixture<HelloCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
