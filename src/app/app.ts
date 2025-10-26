import { Component } from '@angular/core';
import { WishItem } from './shared/models/WishItem';
import { WishEventService } from './shared/services/WishEventService';
import { WishModule } from './wish/wish-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [WishModule],
})
export class App {
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
