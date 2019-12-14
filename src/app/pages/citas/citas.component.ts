import { Component, OnInit } from '@angular/core';
import { Tratamientos, Usuarios, Reservaciones } from 'src/app/models/models';
import { TratamientosService } from 'src/app/services/tratamientos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styles: []
})
export class CitasComponent implements OnInit {

  contenidoForm: FormGroup;
  misTratamientos: Tratamientos[] = [];
  selectedValue: string;
  citaSpiner: boolean = true;
  user: Usuarios;
  citas: Reservaciones[] = [];


  constructor(private tratamientosService: TratamientosService, private citasService: CitasService, private formBuilder: FormBuilder) {
    
    this.contenidoForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Fecha: ['', Validators.required],
      HoraInicio: ['', Validators.required],
      IdUsuario: ['', Validators.required],
      IdTratamiento: ['', Validators.required]
    })
    
    this.tratamientosService.getAll().subscribe((data: Tratamientos[]) => {
      this.misTratamientos = data; 
    });
   }

  ngOnInit() {   
    this.user  = JSON.parse(localStorage.getItem("usuario"));
    this.citasService.GetCitas(this.user.idUsuario).subscribe((data: Reservaciones[]) => {
      this.citas = data;
      console.log(data)
    })
  }

  change()
  {
    console.log(this.selectedValue);
  }

  
  onSubmit(){

    this.citaSpiner = false;
    this.contenidoForm.controls.IdUsuario.setValue(this.user.idUsuario);
    this.contenidoForm.controls.IdTratamiento.setValue(Number(this.selectedValue))
    this.citasService.CrearCita(this.contenidoForm.value).subscribe(cita =>{ 
      this.citaSpiner = true;
      if(cita){
        alert("CITA CREADA CORRECTAMENTE")
        window.location.href= " https://marayahspa.firebaseapp.com/citas"
      }
      else{
        alert("OCURRIO UN ERROR CON LA BASE DE DATOS, INTENTA NUEVAMENTE")
        window.location.href= " https://marayahspa.firebaseapp.com/citas"
      }
        

    });
  }
}
