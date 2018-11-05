import { Component, OnInit, Input } from '@angular/core';
import { Offering } from '../models/card.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { OfferingService } from '../services/offering.service';

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

  constructor(private userService: UserService, private offeringService: OfferingService) { }

  ngOnInit() {
    this.userService.GetSpecificUser(this.card.UserID).subscribe(x => {
      this.cardUser = x;
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  Delete(): void {
    this.offeringService.Delete(this.card.ID);
  }

}
