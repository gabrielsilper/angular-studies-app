import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WishItem } from './models/WishItem';
import { AddWishForm } from './add-wish-form/add-wish-form';
import { WishList } from './wish-list/wish-list';
import { WishSelectorFilter } from './wish-selector-filter/wish-selector-filter';
import { WishEventService } from './services/WishEventService';

@Component({
  selector: 'app-wish',
  imports: [AddWishForm, WishList, WishSelectorFilter],
  templateUrl: './wish.html',
  styleUrl: './wish.css',
})
export class Wish implements OnDestroy {
  wishes: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Learn Java', true),
    new WishItem('Learn DevOps'),
  ];

  filter: any;
  private subscription: Subscription;

  constructor(private wishEvent: WishEventService) {
    this.subscription = this.wishEvent.listen('remove-wish', (wishOfEvent) => {
      this.wishes = this.wishes.filter((wish) => wish !== wishOfEvent);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
