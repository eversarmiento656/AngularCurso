import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

//Componentes
import { AppComponent } from './app.component';
import {TiendaComponent} from './components/tienda/tienda.component';
import {ParqueComponent} from './components/parque/parque.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalComponent } from './components/animal/animal.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CuidadorComponent } from './components/cuidador/cuidador.component';

//modulos
import {ModuloEmailModule} from './modulos/modulo_email/moduloEmail.module';
import {AdminModule} from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParqueComponent,
    HomeComponent,
    AnimalComponent,
    ContactoComponent,
    CuidadorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ModuloEmailModule,
    AdminModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
