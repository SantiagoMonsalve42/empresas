
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tiposdocumentos } from 'src/app/shared/interfaces/shared-interfaces';

@Injectable({
  providedIn: 'root'
})
export class sharedServices {

  private url: string= 'http://localhost/apirest';

  constructor(private http: HttpClient){}

  leerTiposDocumentos():Observable <tiposdocumentos[]>{
    const url=this.url+"/tipodoc";
    return this.http.get<tiposdocumentos[]>(url);
  }
}