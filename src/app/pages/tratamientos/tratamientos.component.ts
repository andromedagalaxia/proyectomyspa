import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/models';
import { ServiceNameService } from 'src/app/services/products.service';

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  styles: []
})
export class TratamientosComponent implements OnInit {

  tratamientos: Products[] = [];

  constructor() { }

  ngOnInit() {
  }

}
