import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/models';
import { ServiceNameService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [] })
export class ProductosComponent implements OnInit {

  misdatos: Productos[] = [];

  constructor(private ProductsService: ServiceNameService) {
    this.ProductsService.getAll().subscribe((data: Productos[]) => {
      this.misdatos = data;
    })
  }

  ngOnInit() {
  }
}
