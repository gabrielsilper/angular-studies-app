import { Component } from '@angular/core';
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
export class Wish {
  wishes: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Learn Java', true),
    new WishItem('Learn DevOps'),
  ];

  constructor(private wishEvent: WishEventService) {
    this.wishEvent.listen('remove-wish', (wishOfEvent) => {
      this.wishes = this.wishes.filter((wish) => wish !== wishOfEvent);
    });
  }

  filter: any;
}
