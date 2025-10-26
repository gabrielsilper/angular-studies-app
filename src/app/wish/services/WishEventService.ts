import { Subject } from 'rxjs';
import { WishItem } from '../models/WishItem';
import { Injectable } from '@angular/core';

type WishEventData = {
  eventName: string;
  payload: WishItem;
};

@Injectable({
    providedIn: 'root'
})
export class WishEventService {
  private subject = new Subject<WishEventData>();

  publish(data: WishEventData) {
    this.subject.next(data);
  }

  listen(eventName: string, callback: (event: WishItem) => void) {
    this.subject.asObservable().subscribe((data: WishEventData) => {
      if (data.eventName === eventName) {
        callback(data.payload);
      }
    });
  }
}
