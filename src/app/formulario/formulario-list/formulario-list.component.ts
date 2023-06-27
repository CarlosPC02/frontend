import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormularioService } from '../formulario.service';


export interface PeriodicElement {
  
  formularioId :number;
  formularioNombre: string;
  formularioUrl: string;
  formularioFecha: string;
}

@Component({
  selector: 'app-formulario-list',
  templateUrl: './formulario-list.component.html',
  styleUrls: ['./formulario-list.component.scss']
})
export class FormularioListComponent{
  
  displayedColumns: string[] = ['formularioId', 'formularioNombre', 'formularioUrl', 'formularioFecha', 'editar', 'eliminar'];  
  dataSource:any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private formularioService: FormularioService){
    this.getFormulario();
  }

  getFormulario(){    
    this.formularioService.getMethod('formulario/getFormulario.php').subscribe(resp => {
      this.dataSource = new MatTableDataSource<PeriodicElement>(resp.document);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
    })
  }



}
