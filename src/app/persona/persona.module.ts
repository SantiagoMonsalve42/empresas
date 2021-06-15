import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPersonaComponent } from './pages/listado-persona/listado-persona.component';



@NgModule({
  declarations: [
    ListadoPersonaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoPersonaComponent
  ]
})
export class PersonaModule { }
