import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { experiencia, persona } from '../interfaces/persona-interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url: string ="http://localhost/apirest";
  constructor(private http: HttpClient ) { }

  leerPersonas(): Observable<persona[]>{
   const url=this.url+"/persona";
   return this.http.get<persona[]>(url);
  }

  agregarPersona(persona: persona): Observable<persona>{
    const url=this.url+"/persona";
    const params = new HttpParams()
      .set('id_td',persona.id_tipo_documento)
      .set('id_car',persona.id_cargo)
      .set('id_emp',persona.id_empresa)
      .set('ndoc',persona.numero_documento)
      .set('n1',persona.nombre1)
      .set('n2',persona.nombre2)
      .set('a1',persona.apellido1)
      .set('a2',persona.apellido2)
      .set('mail',persona.correo)
      .set('fnac',persona.fecha_nacimiento);

    return this.http.post<persona>(url,params);
    
  }

  leerPersonaPorID(id: any): Observable<persona>{
    const url=this.url+"/persona";
    const params = new HttpParams()
          .set('id',id);
   return this.http.get<persona>(url,{params});
  }

  leerExperiencias(id: string): Observable<experiencia[]>{
    const url=this.url+"/experiencia";
    const params = new HttpParams()
          .set('id_p',id);
    return this.http.get<experiencia[]>(url,{params});     
  }
}
