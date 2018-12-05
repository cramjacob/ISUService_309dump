import { Component, OnInit, Input } from '@angular/core';
import { RequestDTO } from '../models/request.model';
import { Offering } from '../models/card.model';
import { SafeResourceUrl } from '@angular/platform-browser';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { OfferingService } from '../services/offering.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  public card: Offering;
  public currentUser;
  public user: User;

  constructor(private userService: UserService,
              private offeringService: OfferingService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(async params => {
      const offeringId = +params.get('id');
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      await this.offeringService.GetOfferingById(offeringId).subscribe(x => {
        console.log(x);
        this.card = x;
        this.userService.GetSpecificUser(this.card.UserID).subscribe(y => {
          console.log(y);
          this.user = y;
        });
      });
    });
  }
  Request(): void {
    const req: RequestDTO = {
      RequesteeID: this.card.UserID,
      RequesterID: this.currentUser.ID,
      OfferingID: this.card.ID,
      Timestamp: new Date()
    };
    console.log(req);
    this.offeringService.Request(req).subscribe(x => {});
  }
}
