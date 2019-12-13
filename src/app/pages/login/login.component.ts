import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { LoginService } from 'src/app/services/login.service';
import { Usuarios } from 'src/app/models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  contenidoForm: FormGroup;
  loginForm: FormGroup;
  loginSpiner: Boolean = true;

  constructor( private usuariosService: UsuariosService, private loginService: LoginService, private formBuilder: FormBuilder) {

    this.contenidoForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      NombreUsuario: ['', Validators.required],
      Contrasenia: ['', Validators.required],
      Rol: ['', Validators.required],
      Correo: ['', Validators.required],
      Telefono: ['', Validators.required]
    })

    this.loginForm = this.formBuilder.group({     
      NombreUsuario: ['', Validators.required],
      Contrasenia: ['', Validators.required],
    })
   }

  ngOnInit() {}

  onSubmit(){
    this.usuariosService.CrearUsuario(this.contenidoForm.value).subscribe(usuario =>{
  
      })
    }

    Login(){
      this.loginSpiner = false;
      this.loginService.Login(this.loginForm.value).subscribe(login => {
        this.loginSpiner = true; 
        if(!login)
        {
          alert("No existe el usuario");
        }
        else{
          let usuario : Usuarios = login;
          alert("BIENVENIDO(A) " + usuario.nombre);
          localStorage.setItem("usuario", JSON.stringify(usuario))
          window.location.href = "http://localhost:4200/home";
        }
      });
    }
}
