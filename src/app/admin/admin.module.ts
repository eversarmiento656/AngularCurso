import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Form, FormsModule}  from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AdminRoutesModule} from './admin-routing.module';

import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({

    declarations:[
        MainComponent,
        ListComponent,
        AddComponent,
        EditComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRoutesModule
    ],
    exports: [
        MainComponent,
        ListComponent,
        AddComponent,
        EditComponent
    ],
    providers: []

})

export class AdminModule{}


