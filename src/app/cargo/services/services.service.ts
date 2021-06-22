import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cargo } from '../interfaces/cargo-interface';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  private url: string='http://localhost/apirest';

  constructor(private http: HttpClient){
    
  }

  leerCargos():Observable <cargo[]>{
    const url=this.url+"/cargo";
    return this.http.get<cargo[]>(url);
  }

  agregarCargo(cargo: cargo): Observable <cargo>{
    const url=this.url+"/cargo";
    const params = new HttpParams()
          .set('desc',cargo.descripcion_cargo);
    
    return this.http.post<cargo>(url,params);
  }

}
