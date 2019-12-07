import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/models';
import { TratamientosComponent } from '../pages/tratamientos/tratamientos.component';
import { TouchSequence } from 'selenium-webdriver';

const URL_TRATAMIENTOS= 'assets/data/tratamientos.json';

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
