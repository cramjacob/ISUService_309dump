import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/message.model';
import { SocketService, Event, Action } from '../services/socket.service';
import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private hubConnection: HubConnection;
  public currentUser;
  public messages: string[] = [];
  public messageContent: string;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.InitializeSocketConnection();
  }

  public sendMessage(msg: string): void {
    const message: ChatMessage = {
      UserID: this.currentUser.ID,
      Content: msg
    };

    this.hubConnection
      .invoke('sendToAll', msg)
      .then(() => this.messageContent = '')
      .catch(err => console.error(err));
  }

  private InitializeSocketConnection(): void {
    this.hubConnection = new HubConnectionBuilder().withUrl("http://localhost:53902").build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this.hubConnection.on('sendToAll', (msg: ChatMessage) => {
      const text = `${msg.UserID}: ${msg.Content}`;
      this.messages.push(msg.Content);
    });
  }

}
