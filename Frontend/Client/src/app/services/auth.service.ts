import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:53903/api/auth';
  constructor(private http: HttpClient) { }

  Login(user: ApiUser): boolean {
    this.http.post<ApiUser>(this.url + '/login', user).subscribe(u => {
      if (u != null) {
        localStorage.setItem('currentUser', JSON.stringify(u));
      }
    });
    return localStorage.getItem('currentUser') != null;
  }

  Register(user: ApiUser): boolean {
    this.http.post<ApiUser>(this.url + '/register', user).subscribe(u => {
      if (u != null) {
        localStorage.setItem('currentUser', JSON.stringify(u));
      }
    });
    return localStorage.getItem('currentUser') != null;
  }
}
