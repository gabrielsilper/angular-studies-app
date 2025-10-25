import { Component, Input } from '@angular/core';
import { WishItem } from '../shared/models/WishItem';
import { WishEventService } from '../shared/services/WishEventService';

@Component({
  selector: 'wish-list-item',
  imports: [],
  templateUrl: './wish-list-item.html',
  styleUrl: './wish-list-item.css',
})
export class WishListItem {
  @Input() wish!: WishItem;

  constructor(private wishEvent: WishEventService) {}

  toggleStatus() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  removeWish() {
    debugger;
    this.wishEvent.publish({
      eventName: 'remove-wish',
      payload: this.wish,
    });
  }

  get wishItemCss() {
    return this.wish.isComplete ? ['completed'] : [];
  }
}
