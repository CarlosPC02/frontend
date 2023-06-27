import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../formulario.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-edit',
  templateUrl: './formulario-edit.component.html',
  styleUrls: ['./formulario-edit.component.scss']
})
export class FormularioEditComponent implements OnInit {
  
  formularioId: any;
  formularios: any ={};

  constructor (public route: ActivatedRoute, private formularioService: FormularioService, private router: Router){ }

  ngOnInit (): void{
    this.formularioId = this.route.snapshot.paramMap.get('id');
    //console.log(this.formularioId);

    this.formularioService.getMethod('formulario/getFormularioId.php?id='+this.formularioId).subscribe(data => {this.formularios = data.document;
    })
  }
  
  editarFormulario(){
    Swal.fire({
      title: 'Desear editar el Formulario?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Editar',
      denyButtonText: `No acepto`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        let formData = new FormData();
    
        formData.append('formularioNombre', this.formularios.formularioNombre);
        formData.append('formularioUrl', this.formularios.formularioUrl);
        formData.append('formularioFecha', this.formularios.formularioFecha);
        formData.append('formularioId', this.formularios.formularioId);
    
        this.formularioService.postMethod('formulario/update.php', formData).subscribe((event: any) => {
          if (event.status() == 'success'){
            Swal.fire('Actualizado!', '', 'success')
            this.router.navigate(['/panel/formulario/formularios']);
          }
        })

          } else if (result.isDenied) {
          Swal.fire('Ups!', '', 'info')
      }
    })
    
  }
}
