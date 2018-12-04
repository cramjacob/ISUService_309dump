import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/message.model';
import { SocketService, Event, Action } from '../services/socket.service';
import { defaultKeyValueDiffers } from '@angular/core/src/change_detection/change_detection';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public action = Action;
  public user;
  public messages: ChatMessage[] = [];
  public messageContent: string;
  public socketConnection;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.InitializeSocketConnection();
  }

  public SendMessage(message: string): void {
    if (message == null) { return; }

    const chatMessage: ChatMessage = {
      UserID: this.user.ID,
      Content: message
    };

    this.socketService.SendMessage(chatMessage);
    this.messageContent = null;
  }

  private InitializeSocketConnection(): void {
    this.socketService.InitializeSocket();

    this.socketConnection = this.socketService.OnMessage().subscribe(message => {
      this.messages.push(message);
    });

    this.socketService.OnEvent(Event.CONNECT).subscribe(() => {
      console.log('Connected successfully');
    });
    
    this.socketService.OnEvent(Event.DISCONNECT).subscribe(() => {
      console.log('Disconnected successfully');
    });
  }

}
