import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferingService {
  offerings = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  private url = 'api/offering'

  constructor() { }

  GetOfferings() {
    return this.offerings;
  }

  PostOffering() {
    //TODO make it post an offering
  }

}
