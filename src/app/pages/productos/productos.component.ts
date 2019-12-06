import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/models';
import { ServiceNameService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [] })
export class ProductosComponent implements OnInit {

  misdatos: Products[] = [];

  constructor(private ProductsService: ServiceNameService) {
    this.ProductsService.getAll().subscribe((data: Products[]) => {
      this.misdatos = data;
    })
  }

  ngOnInit() {
  }
}
