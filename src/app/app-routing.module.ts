import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoEmpresasComponent } from './empresa/pages/listado/listado-empresas.component';
import { InformacionComponent } from './main/pages/informacion/informacion.component';
import { ListadoCargoComponent } from './cargo/pages/listado-cargo/listado-cargo.component';
import { ListadoPersonaComponent } from './persona/pages/listado-persona/listado-persona.component';
import { ListadoInstitucionesComponent } from './instituciones/pages/listado-instituciones/listado-instituciones.component';

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
    component: ListadoPersonaComponent,
    pathMatch: 'full'
  },
  {
    path:'instituciones',
    component: ListadoInstitucionesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
