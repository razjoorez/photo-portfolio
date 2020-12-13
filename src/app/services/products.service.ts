import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEcommerce } from '../models/IEcommerce';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private REST_API_SERVER = "http://localhost:3001/apis";
constructor(private http: HttpClient ) { 
    
  }
  getProducts(){
    return this.http.get(this.REST_API_SERVER);
  }
}
