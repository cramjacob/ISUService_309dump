import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:53903/api/user';

  constructor(private http: HttpClient) { }

  GetAllUsers(): void {
    this.http.get(this.url).subscribe(val => {
      console.log(val);
    });
  }

  GetSpecificUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + '/' + id);
  }

  AddBio(id: number, bio: string): void {
    this.http.post(this.url + '/addbiography/' + id, bio);
  }
}
