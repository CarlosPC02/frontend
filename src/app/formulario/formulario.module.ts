import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioCreateComponent } from './formulario-create/formulario-create.component';
import { FormularioListComponent } from './formulario-list/formulario-list.component';
import { FormularioDetailsComponent } from './formulario-details/formulario-details.component';
import { FormularioEditComponent } from './formulario-edit/formulario-edit.component';
import { FormularioRoutingModule } from './formulario-routing.module';

import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FormularioCreateComponent,
    FormularioListComponent,
    FormularioDetailsComponent,
    FormularioEditComponent,
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class FormularioModule { }
