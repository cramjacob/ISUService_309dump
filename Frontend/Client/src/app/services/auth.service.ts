import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUser, User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:53902/api/auth';
  private currentUser: ApiUser;
  constructor(private http: HttpClient) { }

  Login(user: ApiUser): boolean {
    this.http.post<ApiUser>(this.url + 'login', user).subscribe(u => {
      if (u != null) {
        this.currentUser = u;
      }
    });
    return this.currentUser != null;
  }

  Register(user: ApiUser): boolean {
    this.http.post<ApiUser>(this.url + 'register', user).subscribe(u => {
      if (u != null) {
        this.currentUser = u;
      }
    });
    return this.currentUser != null;
  }
}
