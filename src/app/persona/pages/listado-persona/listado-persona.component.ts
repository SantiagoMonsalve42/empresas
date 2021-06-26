import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { persona } from '../../interfaces/persona-interface';
import { PersonaService } from '../../services/services.service';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html'
})
export class ListadoPersonaComponent implements OnInit{
  
  listaPersonas:persona []=[];
  pageActual: number = 1;


  constructor(private PersonaService: PersonaService,private router: Router){}

  ngOnInit(): void {
   this.leerPersonas();
  }
  leerPersonas(): void{
    this.PersonaService.leerPersonas()
        .subscribe(
          (data : any) =>{
            this.listaPersonas=data.resul;
          },
          (error)=>{
            console.log(error);
          }
        );
  }
  navegar(ids : string){
    this.router.navigate(["/personas/datos/"+ids]);
  }
}
