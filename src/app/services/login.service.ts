import { Injectable } from '@angular/core';
import { Login } from '../models/models';
import { HttpClient } from '@angular/common/http';

const URL_USUARIOS= 'https://proyectospa.azurewebsites.net/api/Login/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  Login(login: Login){
    return this.httpClient.post(URL_USUARIOS, login);
  }
}
