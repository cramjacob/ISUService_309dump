import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'loginPage',
    templateUrl: './loginPage.html'
})

export class LoginComponent implements OnInit {

    username: String;
    password: String;
    constructor() {}

    ngOnInit() {

    }

    logInUser() {
        if (this.username === 'DummyAcc' && this.password === 'password') {
            console.log('Login successful');
        } else {
            console.log('Login failed');
        }
    }
}
