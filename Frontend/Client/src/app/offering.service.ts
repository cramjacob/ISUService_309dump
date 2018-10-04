import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class OfferingService {

  private url = 'http://localhost:53902/api/offering';

  constructor(private http: HttpClient) { }

  GetOfferings(): void {
    this.http.get(this.url).subscribe(val => {
      console.log(val);
    });
  }

  GetOffering(id: number): void {
    this.http.get(this.url + '/' + id).subscribe(val => {
      console.log(val);
    });
  }

  PostOffering() {
    let newUser: User = {
      ID: 1,
      Name: 'deni boi',
      Email: 'sdfadf@sharklasers.com',
      PasswordHash: 'asdfasdf',
      PasswordSalt: 'asfasdf'
    };
    console.log('in post offering');
    this.http.post<User>(this.url, newUser).subscribe(val => {
      console.log(val);
    })
  }

}
