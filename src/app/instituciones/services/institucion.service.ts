import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institucion } from '../interfaces/instituciones-interface';

@Injectable({
  providedIn: 'root'
})
export class institucionService implements OnInit{

  private url: string = "http://localhost/apirest";
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  leerInstituciones(): Observable<Institucion[]>{

    const url=this.url+"/insteducativa";
    return this.http.get<Institucion[]>(url);

  }

  leerInstitucion(id: string): Observable<Institucion>{

    const url=this.url+"/insteducativa";
    const params= new HttpParams()
        .set('id_e',id);
    return this.http.get<Institucion>(url,{params});

  }

  crearInstitucion(institucion: Institucion): Observable<Institucion>{

    const url=this.url+"/insteducativa";

    const param =  new HttpParams()
        .set('name',institucion.nombre);

    return this.http.post<Institucion>(url,param);
    
  }

  eliminarInstitucion(id: string): Observable<Institucion>{
    
    const url=this.url+"/insteducativa?id_ins="+id;

    return this.http.delete<Institucion>(url);
  }

  editarInstitucion(institucion: Institucion): Observable<Institucion>{
    const url=this.url+"/insteducativa";

    const param =  new HttpParams()
        .set('id_ins',institucion.id_institucion_educativa)
        .set('name',institucion.nombre);
    return this.http.put<Institucion>(url,param);
  }
}
