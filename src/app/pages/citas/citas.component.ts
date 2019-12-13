import { Component, OnInit } from '@angular/core';
import { Tratamientos, Usuarios } from 'src/app/models/models';
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

  constructor(private tratamientosService: TratamientosService, private citasService: CitasService, private formBuilder: FormBuilder) {
    
    this.contenidoForm = this.formBuilder.group({
      Nombre: ['', Validators.required],
      Fecha: ['', Validators.required],
      Hora: ['', Validators.required],
      IdUsuario: ['', Validators.required],
      IdTratamiento: ['', Validators.required]
    })
    
    this.tratamientosService.getAll().subscribe((data: Tratamientos[]) => {
      this.misTratamientos = data; 
    });
   }

  ngOnInit() {   
    
  }

  change()
  {
    console.log(this.selectedValue);
  }

user : Usuarios;
  onSubmit(){
    this.user = JSON.parse(localStorage.getItem("usuario"));
    this.contenidoForm.controls.IdUsuario.setValue(this.user.idUsuario);
    this.citasService.CrearCita(this.contenidoForm.value).subscribe(cita =>{ 

      });
  }
}
