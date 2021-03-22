import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEcommerce } from '../models/IEcommerce';
import * as faker from 'faker';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [];
  private REST_API_SERVER = "http://localhost:3001/apis";
constructor(private http: HttpClient ) {

  }
  getProducts(){

    for(let i=1; i<=301; i++) {
      this.products.push( {
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com"
      });
    }
   // return this.http.get(this.REST_API_SERVER);
   return of(this.products);
  }
}
