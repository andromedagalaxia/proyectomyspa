import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loginSession : Boolean;

  constructor(){

  }

  ngOnInit(){
    let usuario = localStorage.getItem("usuario")
    console.log(JSON.parse(usuario));
    if(usuario)
      this.loginSession = true;
    else
      this.loginSession = false;
  }

  title = 'app-myspa';
}