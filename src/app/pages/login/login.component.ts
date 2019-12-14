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
  upSpiner: Boolean = true;

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
    this.upSpiner = false;
    this.usuariosService.CrearUsuario(this.contenidoForm.value).subscribe(usuario =>{
      this.upSpiner = true;
      if(usuario)
        alert("USUARIO CREADO CORRECTAMENTE");
      else
        alert("ERROR AL CREAR USUARIO");
      })
    }

    Login(){
      this.loginSpiner = false;
      this.loginService.Login(this.loginForm.value).subscribe(login => {
        this.loginSpiner = true; 
        console.log(login);
        let usuario : Usuarios = login;
        if(usuario.idUsuario <= 0)
        {
          alert("No existe el usuario");
        }
        else{
          
          alert("BIENVENIDO(A) " + usuario.nombre);
          localStorage.setItem("usuario", JSON.stringify(usuario))
          window.location.href = " https://marayahspa.firebaseapp.com/citas";
        }
      });
    }
}
