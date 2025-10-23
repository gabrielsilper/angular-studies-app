import { Component } from '@angular/core';
import { WishItem } from './shared/models/WishItem';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishFilter } from './shared/enums/WishFilter';
import { WishList } from './wish-list/wish-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [FormsModule, WishList],
})
export class App {
  wishes: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Learn Java', true),
    new WishItem('Learn DevOps'),
  ];

  newWishText = '';

  selectedFilter = WishFilter.ALL;
  filters = Object.values(WishFilter);

  public get visibleWishes(): WishItem[] {
    if (this.selectedFilter == WishFilter.FULFILLED) {
      return this.wishes.filter((wish) => wish.isComplete);
    }
    if (this.selectedFilter == WishFilter.UNFULFILLED) {
      return this.wishes.filter((wish) => !wish.isComplete);
    }
    return this.wishes;
  }

  addNewWish() {
    this.wishes.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
