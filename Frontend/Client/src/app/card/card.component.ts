import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/card.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  public CardURL: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.CardURL = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + this.card.Image);
    console.log(this.card);
    console.log(this.CardURL);
  }

}
