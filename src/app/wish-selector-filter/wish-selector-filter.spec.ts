import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishSelectorFilter } from './wish-selector-filter';

describe('WishSelectorFilter', () => {
  let component: WishSelectorFilter;
  let fixture: ComponentFixture<WishSelectorFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishSelectorFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishSelectorFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
