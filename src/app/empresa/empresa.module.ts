import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoEmpresasComponent } from './pages/listado/listado-empresas.component';



@NgModule({
  declarations: [
    ListadoEmpresasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoEmpresasComponent
  ]
})
export class EmpresaModule { }
