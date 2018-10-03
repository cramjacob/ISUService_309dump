import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public Cards: Card[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  Submit(form: any): void {
    console.log(form);
  }
}
