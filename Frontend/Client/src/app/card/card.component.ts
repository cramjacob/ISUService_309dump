import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/card.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  public CardURL: SafeResourceUrl;
  public cardUser: any;

  constructor() { }

  ngOnInit() {
    this.cardUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}
