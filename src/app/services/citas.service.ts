import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservaciones } from '../models/models';

const URL_RESERVACIONES= 'https://proyectospa.azurewebsites.net/api/reservaciones/CrearReservacion';
const URL_CITAS= 'https://proyectospa.azurewebsites.net/api/reservaciones/GetReservaciones/';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private httpClient: HttpClient) { }
  
  CrearCita(cita: Reservaciones){
    console.log(cita);
    return this.httpClient.post(URL_RESERVACIONES, cita);
  }

  GetCitas(id: Number){

    return this.httpClient.get(URL_CITAS + id.toString());
  }
}
