import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { SharedModule } from './shared/shared.module';
import { EmpresaModule } from './empresa/empresa.module';
import { InstitucionesModule } from './instituciones/instituciones.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    EmpresaModule,
    InstitucionesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
