import { Component } from '@angular/core';
import { OfferingService } from './offering.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  public x;

  constructor(private offeringService:OfferingService) {
  }

  ngOnInit() {
    this.x = this.offeringService.GetOfferings()
  }
}
