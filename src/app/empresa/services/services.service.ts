import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../interfaces/empresa-interface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosEmpresa {

  private url: string='http://localhost/apirest';

  constructor(private http: HttpClient){
    console.log(this.url);
  }

  leerDatos():Observable <Empresa[]>{
    const url=this.url+"/empresa";
    return this.http.get<Empresa[]>(url);
  }

  agregarEmpresa(empresa: Empresa){
    const url=this.url+"/empresa";
    const params= new HttpParams()
    .set('id_td',empresa.id_tipo_documento)
    .set('ndoc',empresa.numero_documento)
    .set('n',empresa.nombre)
    .set('c',empresa.correo)
    .set('t',empresa.telefono_empresa);

    return this.http.post<Empresa>(url,params);
  }


  leerEmpresaIndividual(id: string):Observable <Empresa>{
    const url=this.url+"/empresa";
    const params= new HttpParams()
    .set('id',id);

    return this.http.get<Empresa>(url,{params});
  }
  editarDatosEmpresa(empresa: Empresa) :Observable <Empresa>{
    const url=this.url+"/empresa";
    const params= new HttpParams()
    .set('id_e',empresa.id_empresa)
    .set('c',empresa.correo)
    .set('t',empresa.telefono_empresa);
    return this.http.put<Empresa>(url,params);
  }
}
