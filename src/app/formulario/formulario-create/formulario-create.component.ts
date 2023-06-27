import { Component, ViewChild } from '@angular/core';
import { FormularioService } from '../formulario.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario-create',
  templateUrl: './formulario-create.component.html',
  styleUrls: ['./formulario-create.component.scss']
})
export class FormularioCreateComponent {
  
  @ViewChild('formularioForm') formularioForm! : NgForm;

  
  formularios: any = {}

  constructor (private formularioService: FormularioService, private router: Router){
    
  }
  altaFormulario(){
    Swal.fire({
      title: 'Desear registrar el Formulario?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Registrar',
      denyButtonText: `No acepto`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        let formData = new FormData();
    
        formData.append('formularioNombre', this.formularios.formularioNombre);
        formData.append('formularioUrl', this.formularios.formularioUrl);
        formData.append('formularioFecha', this.formularios.formularioFecha);
    
        this.formularioService.postMethod('formulario/create.php', formData).subscribe((event: any) => {
          if (event.status() == 'success'){
            Swal.fire('Registrado!', '', 'success')
            this.router.navigate(['/panel/formulario/formularios']);
          }
        })

          } else if (result.isDenied) {
          Swal.fire('Ups!', '', 'info')
      }
    })  
  }
}
