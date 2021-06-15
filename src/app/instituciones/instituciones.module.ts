import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoInstitucionesComponent } from './pages/listado-instituciones/listado-instituciones.component';



@NgModule({
  declarations: [
    ListadoInstitucionesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListadoInstitucionesComponent
  ]
})
export class InstitucionesModule { }
