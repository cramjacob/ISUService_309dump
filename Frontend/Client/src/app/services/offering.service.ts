import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card, CreateCard } from '../models/card.model';

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

  PostOffering(offering: CreateCard): Observable<CreateCard> {
    console.log(offering);
    return this.http.post<CreateCard>(this.url, offering);
  }

}
