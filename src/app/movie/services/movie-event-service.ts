import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieEventService {
  private subject = new Subject<MovieEventData>();

  publish(data: MovieEventData) {
    this.subject.next(data);
  }

  listen(eventName: string, callback: (event: any) => void) {
    this.subject.asObservable().subscribe((data) => {
      if (data.eventName === eventName) {
        callback(data.payload);
      }
    });
  }
}

type MovieEventData = {
  eventName: string;
  payload: any;
};
