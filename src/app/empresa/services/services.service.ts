import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../interfaces/empresa-interface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosEmpresa {

  private url: string= 'http://santiagomonsalve42.000webhostapp.com';

  constructor(private http: HttpClient){}

  leerDatos():Observable <Empresa[]>{
    const url=this.url+"/empresa";
    return this.http.get<Empresa[]>(url);
  }

  agregarEmpresa(empresa: Empresa){
    const url=this.url+"/empresa";
    return this.http.post(url,empresa);
  }
}
