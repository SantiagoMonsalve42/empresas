import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


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
    modalEditarEmpresa: boolean=false;


    nuevaEmpresa: Empresa = {
      id_tipo_documento: "",
      tipo_documento:    "",
      id_empresa:        "",
      numero_documento:  "",
      nombre:            "",
      correo:            "",
      telefono_empresa:  ""
    };

    constructor(private service: ServiciosEmpresa, private sharedService: sharedServices){}
    //mostrar datos iniciales
    ngOnInit(): void {
      this.leerTiposDocumentos();
      this.leerDatos();
      
    }

    //FUNCIONES PARA INTERACCION Y DINAMISMO DEL COMPONENTE

    //alerta de sweeet alert reutilizable
    alertaError(message: string): void{
      Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
        confirmButtonText: 'Entendido'
      })
    }
    //alerta de sweeet alert reutilizable
    alertaCorrecta(message:string):void{
      Swal.fire({
        title: 'Buen trabajo!',
        text: message,
        icon: 'success',
        confirmButtonText: 'Entendido'
      })
    }
    //limpiar modal agregar empresa
    limpiarFormularioCrear(){
      this.nuevaEmpresa={
        id_tipo_documento: "",
        tipo_documento:    "",
        id_empresa:        "",
        numero_documento:  "",
        nombre:            "",
        correo:            "",
        telefono_empresa:  ""
      }
    }

    mostrarDatosEmpresa(id: string): void{
       
        this.limpiarFormularioCrear();
        this.servicioLeerDatosIndividual(id);
         this.modalVerEmpresa=true;

    }

    mostrarDatosEmpresaEdicion(id: string):void{
      this.limpiarFormularioCrear();
      this.servicioLeerDatosIndividual(id);

      this.modalEditarEmpresa=true;
    }

    cerrarModalEdicionEmpresa():void{
      this.modalEditarEmpresa=false;
      this.limpiarFormularioCrear();
    }
    cerrarModalVerEmpresa():void{
      this.modalVerEmpresa=false;
      this.limpiarFormularioCrear();
    }

    agregarEmpresa():void{
      this.modalAgregarEmpresa=true;

    }

    cerraModalAgregar():void{
      this.modalAgregarEmpresa=false;
    }

    validarInformacionCrear(){
      if(this.nuevaEmpresa.id_tipo_documento == ""){
        this.alertaError('Seleccione un tipo de documento');
        return false;
      }
      if(this.nuevaEmpresa.numero_documento == "" && this.nuevaEmpresa.numero_documento.length < 7){
        this.alertaError('Digite un número de documento');
        return false;
      }
      if(this.nuevaEmpresa.nombre == ""){
        this.alertaError('Digite un nombre para la empresa');
        return false;
      }
      if(this.nuevaEmpresa.telefono_empresa == "" && this.nuevaEmpresa.telefono_empresa.length < 7){
        this.alertaError('Digite un número de teléfono');
        return false;
      }
      
      if(this.nuevaEmpresa.correo == ""){
        this.alertaError('Digite un correo');
        return false;
      }
      return true;
    }
    validarInformacionEditar(){
      if(this.nuevaEmpresa.telefono_empresa == ""){
        this.alertaError('Digite un número de teléfono');
        return false;
      }
      
      if(this.nuevaEmpresa.correo == ""){
        this.alertaError('Digite un correo');
        return false;
      }
      return true;
    }

        //SERVICIOS
    
    servicioLeerDatosIndividual(id: string){
      this.service.leerEmpresaIndividual(id)
      .subscribe((data) =>{
        this.nuevaEmpresa=data;
      },
      (error)=>{
        console.log(error);
      });
    }
    
        //servicio para traer tipos de documentos
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

    //servicio para tareer todas las empresas
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

     //carga de informacion para crear empresa
    cargarInformacionEmpresa(): void{
      if(this.validarInformacionCrear()){
        this.service.agregarEmpresa(this.nuevaEmpresa)
          .subscribe(
            (data) => {
              if(data == null){
                this.alertaCorrecta('Se creó la empresa correctamente.');
                this.limpiarFormularioCrear();
                this.leerDatos();
                this.cerraModalAgregar();
              }
            },
            (error) => {
              if(error.status == 400){
                console.log(error);
                this.alertaError('Error al crear la empresa, intentelo mas tarde');
              }
            }
          );          
      }
    }

    //seervicio para edicion de datos de una empresa
    editarInformacionEmpresa():void{
      if(this.validarInformacionEditar()){
        this.service.editarDatosEmpresa(this.nuevaEmpresa)
          .subscribe(
            (data) =>{
              if(data == null){
                this.alertaCorrecta('Se editaron los datos de la empresa correctamente.');
                this.limpiarFormularioCrear();
                this.leerDatos();
                this.cerrarModalEdicionEmpresa();
              }
            },
            (error)=>{
              console.log(error);
              this.alertaError('Error al intentar editar los datos de la empresa, intentelo mas tarde');
            }
          )
      }
    }
}
