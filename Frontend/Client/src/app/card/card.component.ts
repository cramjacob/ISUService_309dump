import { Component, OnInit, Input } from '@angular/core';
import { Offering } from '../models/card.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { OfferingService } from '../services/offering.service';
import { RequestDTO } from '../models/request.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Offering;

  public CardURL: SafeResourceUrl;
  public cardUser: User;
  public currentUser;
  public userID: number;

  constructor(private userService: UserService, private offeringService: OfferingService) { }

  async ngOnInit() {
    await this.userService.GetSpecificUser(this.card.UserID).subscribe(x => {
      this.cardUser = x;
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userID = this.currentUser.ID;
  }

  Delete(): void {
    console.log('delete');
    this.offeringService.Delete(this.card.ID);
  }

  Request(): void {
    const req: RequestDTO = {
      RequesteeID: this.cardUser.ID,
      RequesterID: this.currentUser.ID,
      OfferingID: this.card.ID,
      Timestamp: new Date()
    }
    console.log(req);
    this.offeringService.Request(req).subscribe(x => {});
  }

}
