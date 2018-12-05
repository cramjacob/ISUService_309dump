import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { OfferingService } from '../services/offering.service';
import { Offering } from '../models/card.model';
import { RequestDTO } from '../models/request.model';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public user;
  public offerings: Offering[] = [];
  public requests: RequestDTO[] = [];
  public currentUser;

  constructor(private userService: UserService,
              private offeringService: OfferingService,
              private route: ActivatedRoute) { }

  async ngOnInit() {
    await this.route.paramMap.subscribe(params => {
      this.requests = [];
      this.offerings = [];
      const userId = +params.get('id');
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.userService.GetSpecificUser(userId).subscribe(x => {
        this.user = x;
      });
      this.offeringService.GetOfferingByUser(userId).subscribe(offerings => {
        this.offerings = offerings;
      });
      this.offeringService.GetRequestsByUser(userId).subscribe(reqs => {
        this.requests.push(...reqs);
        this.user.ImageURL = 'https://www.viawater.nl/files/default-user.png';
      });
    });
  }

}
