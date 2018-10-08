import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from './models/card.model';

@Injectable({
  providedIn: 'root'
})
export class OfferingService {

  private url = 'http://localhost:53902/api/offering';

  constructor(private http: HttpClient) { }

  GetOfferings(): Observable<Card[]> {
    return this.http.get<Card[]>(this.url);
  }

  GetOfferingById(id: number): Observable<Card> {
    return this.http.get<Card>(this.url + '/' + id);
  }

  PostOffering(offering: Card): Observable<Card> {
    offering.UserID = 1;
    offering.Location = 'Ames, IA';
    offering.PostDate = new Date();
    return this.http.post<Card>(this.url, offering);
  }

}
