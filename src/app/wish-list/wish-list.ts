import { Component, Input } from '@angular/core';
import { WishItem } from '../shared/models/WishItem';
import { NgTemplateOutlet } from '@angular/common';
import { WishListItem } from '../wish-list-item/wish-list-item';

@Component({
  selector: 'wish-list',
  imports: [NgTemplateOutlet, WishListItem],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css',
})
export class WishList {
  @Input() wishes!: WishItem[];
}
