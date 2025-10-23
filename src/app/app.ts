import { Component } from '@angular/core';
import { WishItem } from './shared/models/WishItem';
import { WishList } from './wish-list/wish-list';
import { AddWishForm } from './add-wish-form/add-wish-form';
import { WishSelectorFilter } from './wish-selector-filter/wish-selector-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [WishList, AddWishForm, WishSelectorFilter],
})
export class App {
  wishes: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Learn Java', true),
    new WishItem('Learn DevOps'),
  ];

  filter: any;
}
