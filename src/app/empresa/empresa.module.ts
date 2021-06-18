import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoEmpresasComponent } from './pages/listado/listado-empresas.component';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ListadoEmpresasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    ListadoEmpresasComponent,
  ]
})
export class EmpresaModule { }
