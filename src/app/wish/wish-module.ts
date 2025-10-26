import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWishForm } from './add-wish-form/add-wish-form';
import { WishList } from './wish-list/wish-list';
import { WishListItem } from './wish-list-item/wish-list-item';
import { WishSelectorFilter } from './wish-selector-filter/wish-selector-filter';

@NgModule({
  declarations: [],
  imports: [AddWishForm, WishList, WishListItem, WishSelectorFilter],
  exports: [AddWishForm, WishList, WishListItem, WishSelectorFilter],
})
export class WishModule {}
