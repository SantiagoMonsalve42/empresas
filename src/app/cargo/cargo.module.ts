import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCargoComponent } from './pages/listado-cargo/listado-cargo.component';



@NgModule({
  declarations: [
    ListadoCargoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListadoCargoComponent
  ]
})
export class CargoModule { }
