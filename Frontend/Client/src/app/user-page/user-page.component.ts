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

  constructor(private userService: UserService,
              private offeringService: OfferingService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const userId = +params.get('id');
      this.userService.GetSpecificUser(userId).subscribe(x => {
        this.user = x;
      });
      this.offeringService.GetOfferingByUser(userId).subscribe(offerings => {
        this.offerings = offerings;
      });
    });
  }

}
