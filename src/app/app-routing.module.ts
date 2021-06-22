import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEmpresasComponent } from './empresa/pages/listado/listado-empresas.component';
import { InformacionComponent } from './main/pages/informacion/informacion.component';
import { ListadoCargoComponent } from './cargo/pages/listado-cargo/listado-cargo.component';
import { ListadoPersonaComponent } from './persona/pages/listado-persona/listado-persona.component';
import { ListadoInstitucionesComponent } from './instituciones/pages/listado-instituciones/listado-instituciones.component';
import { AgregarComponent } from './persona/pages/agregar/agregar.component';
import { LeerComponent } from './persona/pages/leer/leer.component';
import { InicioComponent } from './persona/pages/inicio/inicio.component';


const routes: Routes = [
  {
    path:'',
    component: InformacionComponent,
    pathMatch: 'full'
  },
  {
    path:'empresas',
    component: ListadoEmpresasComponent,
    pathMatch: 'full'
  },
  {
    path:'cargos',
    component: ListadoCargoComponent,
    pathMatch: 'full'
  },
  {
    path:'personas',
    component: InicioComponent ,
    children: [
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
      { path: 'datos/:idPersona', component: LeerComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'lista', component: ListadoPersonaComponent },
      { path: '**', component: ListadoPersonaComponent }, 
    ]
  },
  {
    path:'instituciones',
    component: ListadoInstitucionesComponent,
    pathMatch: 'full'
  },
  { 
    path: '**',
     component: InformacionComponent 
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
