import { Component, signal } from '@angular/core';
import Message from '../models/Message';
import { HelloCard } from './hello-card/hello-card';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [HelloCard]
})
export class App {
  protected readonly title = signal('angular-studies-app');
  protected messages: Message[] = [
    new Message(200, 'Você é capaz de mais do que imagina.'),
    new Message(404, null),
    new Message(200, 'Faça o que você pode, com o que tem, onde você está.'),
  ];
}
