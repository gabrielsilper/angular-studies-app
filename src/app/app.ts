import { Component } from '@angular/core';
import { WishItem } from './shared/models/WishItem';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [NgTemplateOutlet, FormsModule],
})
export class App {
  wishes: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Learn Java', true),
    new WishItem('Learn DevOps'),
  ];

  newWishText = '';

  toggleWish(wish: WishItem) {
    wish.isComplete = !wish.isComplete;
    console.log(wish);
  }

  addNewWish() {
    this.wishes.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
