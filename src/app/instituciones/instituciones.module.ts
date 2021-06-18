import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { ListadoInstitucionesComponent } from './pages/listado-instituciones/listado-instituciones.component';






@NgModule({
  declarations: [
    ListadoInstitucionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports:[
    ListadoInstitucionesComponent
  ]
})
export class InstitucionesModule { }
