import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:53902/api/user';

  constructor(private http: HttpClient) { }

  GetAllUsers(): void {
    this.http.get(this.url).subscribe(val => {
      console.log(val);
    });
  }

  GetSpecificUser(id: number): void {
    this.http.get(this.url + '/' + id).subscribe(val => {
      console.log(val);
    });
  }

  AddBio(id: number, bio: string): void {
    this.http.post(this.url + '/addbiography/' + id, bio);
  }
}
