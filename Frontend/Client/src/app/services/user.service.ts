import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  GetSpecificUser(id: number): void {
    this.http.get(this.url + '/' + id).subscribe(val => {
      console.log(val);
    });
  }

<<<<<<< HEAD:Frontend/Client/src/app/user.service.ts
  PostOffering() {
    const newUser: User = {
      ID: 1,
      Name: 'deni boi',
      Email: 'sdfadf@sharklasers.com',
      PasswordHash: 'asdfasdf',
      PasswordSalt: 'asfasdf'
    };
    console.log('in post offering');
    this.http.post<User>(this.url, newUser).subscribe(val => {
      console.log(val);
    });
  }

=======
>>>>>>> 4e5e6310475ddcc452c4fa328c204c72e0b2514f:Frontend/Client/src/app/services/user.service.ts
}
