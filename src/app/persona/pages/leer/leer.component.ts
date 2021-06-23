
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { persona, experiencia } from '../../interfaces/persona-interface';
import { PersonaService } from '../../services/services.service';



@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html'
})
export class LeerComponent implements OnInit {
  
  experiencias: experiencia[]=[];
  persona: persona={
    id_tipo_documento: "",
    tipo_documento: "",
    id_persona: "",
    id_cargo: "",
    id_empresa: "",
    numero_documento: "",
    nombre1: "",
    nombre2: "",
    apellido1: "",
    apellido2: "",
    correo: "",
    fecha_nacimiento: "",
    descripcion_cargo:"",
    nombre_empresa: ""
  }
  
  constructor(
    private rutaActiva: ActivatedRoute, 
    private PersonaService: PersonaService,
    private router: Router
    ) { }
  
  
  ngOnInit(): void {
    this.cargaInicial();
  }

  cargaInicial():void{
    this.rutaActiva.params.
    subscribe( params =>{
      this.PersonaService.leerPersonaPorID(params.id)
        .subscribe(data => {
          if(data){
            this.persona=data;
          }else{
            this.router.navigate(['personas/lista']);
          }
        });
      this.PersonaService.leerExperiencias(params.id)
        .subscribe(
          (data) =>{
           this.experiencias=data;
          },
          (error) =>{
            console.log(error);
          }
        );   
    });
  }

  agregarExperiencia():void{
    console.log(this.persona.id_persona);
  }
}
