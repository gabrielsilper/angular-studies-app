import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wish-list-item',
  imports: [],
  templateUrl: './wish-list-item.html',
  styleUrl: './wish-list-item.css',
})
export class WishListItem {
  @Input() content!: string;

  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  toggleStatus() {
    this.fulfilled = !this.fulfilled;
    return this.fulfilledChange.emit(this.fulfilled);
  }

  get wishItemCss() {
    return this.fulfilled ? ['completed'] : [];
  }
}
