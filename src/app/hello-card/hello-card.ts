import { Component } from '@angular/core';

@Component({
  selector: 'hello-card',
  templateUrl: './hello-card.html',
  styleUrl: './hello-card.css',
})
export class HelloCard {
  name = '';
  changed = false;

  changeName() {
    this.name = this.changed ? 'Gabriel' : 'Maiana';
    this.changed = !this.changed;
  }
}
