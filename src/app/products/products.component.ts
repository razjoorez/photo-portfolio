import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IEcommerce } from '../models/IEcommerce';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  //productData = [] ;
  movies: any[] =[  
    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
    {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
]  
  productData: any[];
  constructor(private products: ProductsService) { }

  ngOnInit() {

    this.products.getProducts().subscribe((data: any[]) =>{
     
    this.productData = data;
    console.log(this.productData);
    });
  }

}
