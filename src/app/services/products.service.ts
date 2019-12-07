import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../models/models';
import { ProductosComponent } from '../pages/productos/productos.component';
import { TouchSequence } from 'selenium-webdriver';

//const URL_PRODUCTS= 'assets/data/productos.json';
const URL_PRODUCTS= 'https://proyectospa.azurewebsites.net/api/productos/GetProductos';


@Injectable({providedIn: 'root'})

export class ServiceNameService {

  product: Productos={};
 
  
  constructor(private httpClient: HttpClient) { }
  

getAll() {
  return this.httpClient.get(URL_PRODUCTS);
}



}





