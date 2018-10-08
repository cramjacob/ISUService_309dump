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

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.CardURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.card.Image);
    console.log(this.card);
    console.log(this.CardURL);
  }

}
