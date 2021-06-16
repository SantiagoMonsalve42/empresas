import { Component, OnInit } from '@angular/core';
import { ServiciosEmpresa } from '../../services/services.service';
import { Empresa } from '../../interfaces/empresa-interface';
import { sharedServices } from 'src/app/shared/services/services.service';
import { tiposdocumentos } from 'src/app/shared/interfaces/shared-interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado-empresas.component.html'
})
export class ListadoEmpresasComponent implements OnInit{

    listadoEmpresas : Empresa[]=[];
    listadoDocumentos: tiposdocumentos[]=[];
    modalVerEmpresa: boolean= false;
    modalAgregarEmpresa: boolean=false;
    empresa!: Empresa;

    constructor(private service: ServiciosEmpresa, private sharedService: sharedServices){}

    ngOnInit(): void {
      this.leerTiposDocumentos();
      this.leerDatos();
    }


    cargarInformacionEmpresa(): void{
      console.log(this.empresa);
     /* this.service.agregarEmpresa(this.empresa)
          .subscribe(
            (data) => {
              console.log(data);
            },
            (error) => {
              console.log(error);
            }
          );*/
    }

    leerDatos():void{
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

    leerTiposDocumentos(){
      this.sharedService.leerTiposDocumentos()
      .subscribe(
        (tiposdocumentos) => {
          this.listadoDocumentos=tiposdocumentos;
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
