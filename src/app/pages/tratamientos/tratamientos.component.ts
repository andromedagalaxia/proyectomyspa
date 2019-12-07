import { Component, OnInit } from '@angular/core';
import { Products, Tratamientos } from 'src/app/models/models';
import { ServiceNameService } from 'src/app/services/products.service';
import { TratamientosService } from 'src/app/services/tratamientos.service';

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  styles: []
})


export class TratamientosComponent implements OnInit {
 
  tratamientos: Tratamientos[] = [];

  constructor(private TratamientosSvc: TratamientosService) {
    this.TratamientosSvc.getAll().subscribe((data: Tratamientos[]) => {
      this.tratamientos = data;
    })


   }

  ngOnInit() {
  }

}
