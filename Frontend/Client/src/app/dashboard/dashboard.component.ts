import { Component, OnInit } from '@angular/core';
import { Offering, CreateOffering } from '../models/card.model';
import { OfferingService } from '../services/offering.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public Cards: Offering[];

  constructor(private offeringService: OfferingService) { }

  async ngOnInit() {
    await this.offeringService.GetOfferings().subscribe(cards => {
      this.Cards = cards;
    });
  }


}
