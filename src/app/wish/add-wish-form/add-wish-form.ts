import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../models/WishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  imports: [FormsModule],
  templateUrl: './add-wish-form.html',
  styleUrl: './add-wish-form.css',
})
export class AddWishForm {
  @Output() addWish = new EventEmitter<WishItem>();
  
  newWishText = '';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = '';
  }
}
