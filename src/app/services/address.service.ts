import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAddress } from '../models/IAddress';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient ) { 
  // apiKey = 'zR3470daaUSOwd_hvvd-ag28015';
  // adminKey = 'XvpW1fBcPEecmwLwqahmAA28015';
  // addressUrl = 'https://api.getAddress.io/find/w148jb?api-key=' + this.apiKey;
  }
  
  $address: Observable<IAddress[]>;
 
  // getAddress(): Observable<this.$address> {
  //   return this.http.get<$address[]>(this.addressUrl);
  // }

  // getAddress(postCode: string): Observable<IAddress[]> {
  //   return this.http.get<IAddress[]>(this.addressUrl).pipe(
  //     catchError(this.handleError<IAddress[]>('getAddress', [])),
  //   );
  // };

  // getFakeAdd() {
  //   return  this.addresses;
  // }
  


  
    


  
// private handleError<T>(operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {

//     // TODO: send the error to remote logging infrastructure
//     console.error(error); // log to console instead

//     // TODO: better job of transforming error for user consumption
//     console.log(`${operation} failed: ${error.message}`);

//     // Let the app keep running by returning an empty result.
//     return of(result as T);
//   };



addresses: IAddress[] = [
  {
  firstLine: '1 Kentish House',
  secondLine: 'Ashford Road',
  postCode: 'SW8 12ab',
  country: 'UK',
  town: 'London'
},
{
  firstLine: '2 Ashton House',
  secondLine: 'Dartford Road',
  postCode: 'SW8 12ab',
  country: 'UK',
  town: 'London'
},
{
  firstLine: '3 Sutton House',
  secondLine: 'Ibberton Road',
  postCode: 'SW8 12ab',
  country: 'UK',
  town: 'London'
},
{
  firstLine: '4 Durrells House',
  secondLine: 'Watford Street',
  postCode: 'SW8 12ab',
  country: 'UK',
  town: 'London'
}
];
}

  

