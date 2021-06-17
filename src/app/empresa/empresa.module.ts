import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoEmpresasComponent } from './pages/listado/listado-empresas.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoEmpresasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListadoEmpresasComponent
  ]
})
export class EmpresaModule { }
