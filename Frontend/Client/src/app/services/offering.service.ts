import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offering, CreateOffering } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class OfferingService {

  private url = 'http://localhost:53903/api/offering';

  constructor(private http: HttpClient) { }

  GetOfferings(): Observable<Offering[]> {
    return this.http.get<Offering[]>(this.url);
  }

  GetOfferingById(id: number): Observable<Offering> {
    return this.http.get<Offering>(this.url + '/' + id);
  }

  GetOfferingByUser(userId: number): Observable<Offering[]> {
    return this.http.get<Offering[]>(this.url + '/by-user/' + userId);
  }

  PostOffering(offering: CreateOffering): Observable<CreateOffering> {
    console.log(offering);
    return this.http.post<CreateOffering>(this.url, offering);
  }

  Delete(id: number): void {
    this.http.delete<Offering>(this.url + '/' + id);
  }

}
