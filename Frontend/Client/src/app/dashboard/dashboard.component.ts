import { Component, OnInit } from '@angular/core';
import { Card, CreateCard } from '../models/card.model';
import { NgForm } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { OfferingService } from '../services/offering.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public Cards: Card[];

  constructor(private offeringService: OfferingService) { }

  ngOnInit() {
    this.offeringService.GetOfferings().subscribe(cards => {
      this.Cards = cards;
    });
  }

  Submit(form: any): void {
    console.log(form);
    console.log(JSON.parse(localStorage.getItem('currentUser')));
    const offering: CreateCard = {
      Title: form.Title,
      Description: form.Description,
      PostDate: new Date(),
      Location: form.Location,
      UserID: JSON.parse(localStorage.getItem('currentUser'))['ID']
    };
     console.log(offering);
     this.offeringService.PostOffering(offering).subscribe(cards => {
       this.Cards.push(cards as Card);
    });
  }
}
