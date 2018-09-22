import {Component, OnInit } from "@angular/core"; 

@Component({
    Selector:"loginPage",
    templateUrl:"./loginPage.html"
})

export class LoginComponent implements OnInit {

    username:string;
    password:string;
    constructor() {}

    ngOnInit(){

    }

    logInUser(){
        if(this.username == "DummyAcc" && this.password == "password"){
            console.log("Login successful");
        }
        else{
            console.log("Login failed");
        }
    }
}