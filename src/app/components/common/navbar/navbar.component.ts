import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  @Input() loginSession : Boolean;

  constructor(private router: Router) {  }

  ngOnInit() {



  }

  logout(){
    localStorage.removeItem("usuario");
    window.location.href = "http://localhost:4200/home";
  }



}
