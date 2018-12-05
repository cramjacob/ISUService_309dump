import { Component, OnInit } from '@angular/core';
import { ChatMessage, ServerChatMessage } from '../models/message.model';
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

  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.InitializeSocketConnection();
  }

  public sendMessage(): void {
    const message: ChatMessage = {
      UserID: this.currentUser.ID,
      Content: this.messageContent
    };
    this.hubConnection
      .invoke('ReceiveMessage', message)
      .then(() => this.messageContent = '')
      .catch(err => console.error(err));
  }

  private InitializeSocketConnection(): void {
    this.hubConnection = new HubConnectionBuilder().withUrl('http://localhost:53902/chat').build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :( -- ' + err));

    this.hubConnection.on('ReceiveMessage', (msg: ServerChatMessage) => {
      const text = `${msg.userID}: ${msg.content}`;
      this.messages.push(text);
    });
  }

}
