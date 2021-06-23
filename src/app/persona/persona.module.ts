import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { ListadoPersonaComponent } from './pages/listado-persona/listado-persona.component';
import { AppRoutingModule } from '../app-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { InicioComponent } from './pages/inicio/inicio.component'





@NgModule({
  declarations: [
    ListadoPersonaComponent,
    AgregarComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    ListadoPersonaComponent
  ]
})
export class PersonaModule { }
