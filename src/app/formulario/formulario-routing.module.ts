import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioListComponent } from './formulario-list/formulario-list.component';
import { FormularioCreateComponent } from './formulario-create/formulario-create.component';
import { FormularioEditComponent } from './formulario-edit/formulario-edit.component';
import { FormularioDetailsComponent } from './formulario-details/formulario-details.component';


const routes: Routes = [
  { path:'formularios', component: FormularioListComponent},
  { path: 'formularioCrear', component: FormularioCreateComponent},
  { path: 'formularioEditar/:id', component: FormularioEditComponent},
  { path: 'formularioDetalle/id', component:FormularioDetailsComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }

