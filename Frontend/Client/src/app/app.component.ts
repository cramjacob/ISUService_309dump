import { Component } from '@angular/core';
import { Card } from './models/card.model';
import { OfferingService } from './offering.service';
import { UserService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public asdf: any;
  /**
   *
   */
  constructor(private userService: UserService) { }
  
  Get(): any {
    this.asdf = this.userService.GetAllUsers();
  }

  GetSpecific(): any {
    let id = 1;
    this.userService.GetSpecificUser(id);
  }
}
