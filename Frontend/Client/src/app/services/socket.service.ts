import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  private url = 'http://localhost:53902/api/socket';

  constructor() { }

  public InitializeSocket(): void {
    this.socket = socketIo('http://localhost:53902')
  }

  public SendMessage(message: ChatMessage): void {
    this.socket.emit('message', message);
  }

  public OnMessage(): Observable<ChatMessage> {
    return new Observable<ChatMessage>(obs => {
      this.socket.on('message', (data: ChatMessage) => obs.next(data));
    });
  }

  public OnEvent(event: Event): Observable<any> {
    return new Observable<Event>(obs => {
      this.socket.on(event, () => obs.next());
    })
  }
}
export enum Action {
  JOINED,
  LEFT
}

export enum Event {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect'
}