import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/models';
import { ProductosComponent } from '../pages/productos/productos.component';
import { TouchSequence } from 'selenium-webdriver';

const URL_PRODUCTS= 'assets/data/productos.json';


@Injectable({providedIn: 'root'})

export class ServiceNameService {

  product: Products={};
 
  
  constructor(private httpClient: HttpClient) { }
  

getAll() {
  return this.httpClient.get(URL_PRODUCTS);
}



}





