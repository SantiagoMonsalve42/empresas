import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ListadoCargoComponent } from './pages/listado-cargo/listado-cargo.component';

import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ListadoCargoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports:[
    ListadoCargoComponent
  ]
})
export class CargoModule { }
