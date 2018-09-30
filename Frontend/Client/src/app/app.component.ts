import { Component } from '@angular/core';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  public cards: Card[] = [
    {
      Title: 'Title of the Service',
      Description: `Lorem ipsonsequat.`,
      ImgUrl: 'https://cyclones.com/images/2016/2/17/JackTriceStadium3.jpg',
      Date: new Date('9/1/2018'),
      Location: 'Ames, IA'
    },
    {
      Title: 'Title of the Service',
      Description: `Lorem ipsum dolor sit amet,
      kconsectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat.`,
      ImgUrl: 'https://cyclones.com/images/2016/2/17/JackTriceStadium3.jpg',
      Date: new Date('9/1/2018'),
      Location: 'Ames, IA'
    },
    {
      Title: 'Title of the Service',
      Description: `Lorem ipsum dolor sit amet,
      kconsectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat.`,
      ImgUrl: 'https://cyclones.com/images/2016/2/17/JackTriceStadium3.jpg',
      Date: new Date('9/1/2018'),
      Location: 'Ames, IA'
    },
    {
      Title: 'Title of the Service',
      Description: `Lorem ipsum dfdfdfdfdfrcitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat.`,
      ImgUrl: 'https://cyclones.com/images/2016/2/17/JackTriceStadium3.jpg',
      Date: new Date('9/1/2018'),
      Location: 'Ames, IA'
    }
];
  // user1 = {

  //   service: '311 Homework Help',
  //   description: 'I am a smart student who wants to assist others with their 311 homework.',
  //   location: 'Parks library, Ames',
  //   date: '9/29/2018',
  // };


}
