import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { NgForm } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public form: Offering = {
    Title: '',
    Description: '',
    Price: 0
  };

  public Cards: Card[] = [{
    Title: 'Title', Description: 'DEscription', ImgUrl: '', Location: 'Location', Date: new Date()  }];

  constructor() {
  }

  ngOnInit() {
  }

  Submit(form: any): void {
    console.log(form);
  }
}

export interface Offering {
  Title: string;
  Description: string;
  Price: number;
}
