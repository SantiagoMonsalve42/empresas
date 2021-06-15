import { Component } from '@angular/core';
import { ServiciosEmpresa } from '../../services/services.service';
import { Empresa } from '../../interfaces/empresa-interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado-empresas.component.html'
})
export class ListadoEmpresasComponent {

    listadoEmpresas : Empresa[]=[];
    modalVerEmpresa: boolean= false;
    modalAgregarEmpresa: boolean=false;

    constructor(private service: ServiciosEmpresa){
      this.cargarInformacion();
    }


    cargarInformacion(): void{
      this.service.leerDatos()
      .subscribe(
        (empresa) => {
          this.listadoEmpresas=empresa;
        },
        (error) => {
          console.log(error);
        }
      );
    }

    mostrarDatosEmpresa(): void{
       this.modalVerEmpresa=true;
    }


    cerrarModalVerEmpresa():void{
      this.modalVerEmpresa=false;
    }

    agregarEmpresa():void{
      this.modalAgregarEmpresa=true;
    }

    cerraModalAgregar():void{
      this.modalAgregarEmpresa=false;
    }


    
}
