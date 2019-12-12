import { Injectable } from '@angular/core';
import { Usuarios } from '../models/models';
import { HttpClient } from '@angular/common/http';

const URL_USUARIOS= 'https://proyectospa.azurewebsites.net/api/Usuarios/CrearUsuario';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {
  
  constructor(private httpClient: HttpClient) { }

  CrearUsuario(usuarios: Usuarios){
    return this.httpClient.post(URL_USUARIOS, usuarios);
  }
}

