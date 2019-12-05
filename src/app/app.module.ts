import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HelpComponent } from './pages/help/help.component';
import { TratamientosComponent } from './pages/tratamientos/tratamientos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PagesNotFountComponent } from './pages/pages-not-fount/pages-not-fount.component';
import { CitasComponent } from './pages/citas/citas.component';
import { AppRoutingModule } from './app.routes';
import { FooterComponent } from './components/common/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    HelpComponent,
    TratamientosComponent,
    ProductosComponent,
    PagesNotFountComponent,
    CitasComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
