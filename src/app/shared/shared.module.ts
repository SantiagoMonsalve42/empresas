import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponentComponent } from './footer-component/footer-component.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponentComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    FooterComponentComponent
  ]
})
export class SharedModule { }
