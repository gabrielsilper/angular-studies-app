import { Component, Input } from '@angular/core';
import { WishItem } from '../shared/models/WishItem';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'wish-list',
  imports: [NgTemplateOutlet],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList {
  @Input() wishes: WishItem[] = [];

  toggleWish(wish: WishItem) {
    wish.isComplete = !wish.isComplete;
  }
}
