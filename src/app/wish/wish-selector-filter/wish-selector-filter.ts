import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WishFilter } from '../../shared/enums/WishFilter';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/WishItem';

const filterCallbacks = {
  All: (wish: WishItem) => wish,
  Unfulfilled: (wish: WishItem) => !wish.isComplete,
  Fulfilled: (wish: WishItem) => wish.isComplete,
};

@Component({
  selector: 'wish-selector-filter',
  imports: [FormsModule],
  templateUrl: './wish-selector-filter.html',
  styleUrl: './wish-selector-filter.css',
})
export class WishSelectorFilter implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  selectedFilter = WishFilter.ALL;
  filters = Object.values(WishFilter);

  ngOnInit(): void {
    this.changeFilter();
  }

  changeFilter() {
    return this.filterChange.emit(filterCallbacks[this.selectedFilter]);
  }
}
