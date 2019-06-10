// Importar modulos necesarios
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GuardarEmailComponent } from './componentes/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './componentes/mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './componentes/main-email/main-email.component';

@NgModule({
    imports: [CommonModule, FormsModule], 
    declarations : [
        GuardarEmailComponent,
        MostrarEmailComponent,
        MainEmailComponent
    ],
    exports: [MainEmailComponent]
})

export class ModuloEmailModule{ }
