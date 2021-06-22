import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { persona } from '../interfaces/persona-interface';

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
}
