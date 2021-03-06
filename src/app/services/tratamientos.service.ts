import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../models/models';
import { TratamientosComponent } from '../pages/tratamientos/tratamientos.component';
import { TouchSequence } from 'selenium-webdriver';

const URL_TRATAMIENTOS= 'https://proyectospa.azurewebsites.net/api/tratamientos/GetTratamientos';

@Injectable({
  providedIn: 'root'
})



export class TratamientosService {

  constructor(private httpClient: HttpClient) {
   }

   getAll() {
    return this.httpClient.get(URL_TRATAMIENTOS);
  }
}
