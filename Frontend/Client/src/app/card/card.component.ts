import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/card.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  public CardURL: SafeResourceUrl;
  public cardUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.GetSpecificUser(this.card.UserID).subscribe(x => {
      this.cardUser = x;
    });
    console.log(this.cardUser);
  }

}
