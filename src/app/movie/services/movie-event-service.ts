import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

type MovieEventData = {
  eventName: string;
  payload: any;
};

@Injectable({
  providedIn: 'root',
})
export class MovieEventService {
  private subject = new Subject<MovieEventData>();

  publish(data: MovieEventData) {
    this.subject.next(data);
  }

  listen(eventName: string, callback: (event: any) => void): Subscription {
    return this.subject.asObservable().subscribe((data) => {
      if (data.eventName === eventName) {
        callback(data.payload);
      }
    });
  }
}
