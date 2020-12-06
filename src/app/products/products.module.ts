import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsService } from '../services/products.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
