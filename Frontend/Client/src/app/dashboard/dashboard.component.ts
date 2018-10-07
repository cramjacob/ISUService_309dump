import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { NgForm } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { OfferingService } from '../offering.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public form: Card = {
    ID: 1,
    Title: '',
    Description: '',
    Image: '',
    PostDate: new Date(),
    Location: 'Ames, IA',
    UserID: 1
  };

  public Cards: Card[];

  constructor(private offeringService: OfferingService) { }

  ngOnInit() {
    this.offeringService.GetOfferings().subscribe(cards => {
      this.Cards = cards;
    });
  }

  Submit(form: any): void {
    console.log(form);
  }
}
