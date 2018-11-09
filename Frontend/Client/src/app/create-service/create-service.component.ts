import { Component, OnInit } from '@angular/core';
import { Offering, CreateOffering } from '../models/card.model';
import { OfferingService } from '../services/offering.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  public Cards: Offering[];

  constructor(
    private offeringService: OfferingService,
    private router: Router) { }

  ngOnInit() {
  }
  Submit(form: any): void {
    console.log(form);
    console.log(JSON.parse(localStorage.getItem('currentUser')));
    const offering: CreateOffering = {
      Title: form.Title,
      Description: form.Description,
      PostDate: new Date(),
      Location: form.Location,
      ImageURL: form.ImageURL,
      UserID: JSON.parse(localStorage.getItem('currentUser'))['ID']
    };
     console.log(offering);
     this.offeringService.PostOffering(offering).subscribe(cards => {
       this.Cards.push(cards as Offering);
    });
    this.router.navigate(['/dashboard']);
  }
}
