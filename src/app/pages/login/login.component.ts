import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  contenidoForm: FormGroup;

  constructor( private usuariosService: UsuariosService, private formBuilder: FormBuilder) {

    this.contenidoForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      NombreUsuario: ['', Validators.required],
      Contrasenia: ['', Validators.required],
      Rol: ['', Validators.required],
      Correo: ['', Validators.required],
      Telefono: ['', Validators.required]
    })
   }

  ngOnInit() {}

  onSubmit(){
    this.usuariosService.CrearUsuario(this.contenidoForm.value).subscribe(usuario =>{
  
      })
    }
}
