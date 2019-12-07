//imports angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//imports components
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CitasComponent } from './pages/citas/citas.component';
import { HelpComponent } from './pages/help/help.component';
import { TratamientosComponent } from './pages/tratamientos/tratamientos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PagesNotFountComponent } from './pages/pages-not-fount/pages-not-fount.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { LoginComponent} from './pages/login/login.component'

//rutas
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'citas', component: CitasComponent },
    { path: 'ayuda', component: HelpComponent },
    { path: 'tratamientos', component: TratamientosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'fotos', component: FotosComponent },
    { path: 'login', component: LoginComponent},
    { path: '**', component: PagesNotFountComponent },
    { path: '**', redirectTo: '/home', pathMatch:'full' },
    { path: '', redirectTo: '/home', pathMatch:'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
