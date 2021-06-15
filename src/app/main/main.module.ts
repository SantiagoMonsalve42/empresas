import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionComponent } from './pages/informacion/informacion.component';



@NgModule({
  declarations: [
    InformacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InformacionComponent
  ]
})
export class MainModule { }
