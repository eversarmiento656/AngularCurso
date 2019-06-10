import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes
import {TiendaComponent} from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalComponent } from './components/animal/animal.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CuidadorComponent } from './components/cuidador/cuidador.component';

const appRoutes: Routes = [
    {path:'', component : HomeComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component : HomeComponent},
    {path:'animal', component : AnimalComponent},
    {path:'contacto', component : ContactoComponent},
    {path:'cuidador', component : CuidadorComponent},
    {path:'tienda', component : TiendaComponent},
    {path:'**', component : HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
