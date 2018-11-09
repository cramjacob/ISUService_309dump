import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { OfferingService } from '../services/offering.service';
import { Offering } from '../models/card.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public user;
  public offerings: Offering[];
  public currentUser;

  constructor(private userService: UserService,
              private offeringService: OfferingService,
              private route: ActivatedRoute) { }

  async ngOnInit() {
    await this.route.paramMap.subscribe(params => {
      const userId = +params.get('id');
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.userService.GetSpecificUser(userId).subscribe(x => {
        this.user = x;
      });
      this.offeringService.GetOfferingByUser(userId).subscribe(offerings => {
        this.offerings = offerings;
      });
    });
    if (this.user.ImageURL == null) {
      this.user.ImageURL = 'https://www.viawater.nl/files/default-user.png';
      }
  }

}
