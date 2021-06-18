import { Component, OnInit } from '@angular/core';

import { institucionService } from '../../services/institucion.service';
import { Institucion } from '../../interfaces/instituciones-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-instituciones',
  templateUrl: './listado-instituciones.component.html'
})
export class ListadoInstitucionesComponent{

  instituciones : Institucion[]=[];
  modalAgregar : boolean = false;
  modalEditar : boolean = false;
  pageActual:number =1;
  institucion: Institucion={
    id_institucion_educativa: "",
    nombre: ""
  }
  
  constructor(private service: institucionService) { 
    this.leerInstitucionesService();
  }

  limpiarInstitucionObject(): void{
    this.institucion = {
      id_institucion_educativa: "",
      nombre: ""
    }
  }

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

  abrirModalAgregar(): void{
    this.modalAgregar = true;
  }

  cerrarModalAgregar(): void{
    this.modalAgregar = false;
    this.limpiarInstitucionObject();
  }

  abrirModalEdicion(id: string):void {
    this.modalEditar = true;
    this.leerInstitucionService(id);
  }

  cerrarModalEdicion(): void{
    this.modalEditar = false;
    this.limpiarInstitucionObject();
  }

  validarFormulario(){
    if(this.institucion.nombre === ""   ||  this.institucion.nombre.length < 7){
      return false;
    }
    return true;
  }

  editarInstitucion(){
    this.service.editarInstitucion(this.institucion)
        .subscribe(
          (data) =>{
            if(data == null){
              this.leerInstitucionesService();
              this.alertaCorrecta("Institución educativa editada correctamente");
              this.cerrarModalEdicion();
            }
          },
          (error) => {
            if(error.status == 400 || error.status != null){
              this.alertaError("Error al intentar editar la institución educativa");
            }
          }
        )
  }

  eliminarInstitucion(id: string){
    Swal.fire({
      title: '¿Esta seguro de que desea eliminar la institución?',
      text: "Nota: Algunas instituciones no pueden ser elimininadas ya que estan relacionadas con otros elementos de nuestra base de datos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarInstitucionService(id);
      }
    })
  }

  eliminarInstitucionService(id:string){

    this.service.eliminarInstitucion(id)
        .subscribe(
          (data) => {
            if(data == null){
              this.leerInstitucionesService();
              this.alertaCorrecta("Institución educativa eliminada correctamente");
            }
          }, 
          (error) => {
            if(error.status == 400 || error.status != null){
              this.alertaError("Error al intentar eliminar la institución educativa");
            }
          }
          )
  }

  agregarInstitucionService(): void{
    if(this.validarFormulario()){
        this.service.crearInstitucion(this.institucion)
          .subscribe(
            (data) => {
              if(data == null){
                this.leerInstitucionesService();
                this.cerrarModalAgregar();
                this.alertaCorrecta("Institucion educativa creada correctamete");
                
              }
            }, 
            (error) => {
              if(error.status == 400 || error.status != null){
                this.alertaError("Error al intentar crear la institución educativa");
              }
            }
          )
    }else{
        this.alertaError("El nombre debe debe contener al menos 7 carácteres");
    }
  }


  leerInstitucionesService():void {
    this.service.leerInstituciones()
        .subscribe(
          (data) => {
            this.instituciones=data;
          },
          (error) => {
            console.log(error);
          }
        )
  }

  leerInstitucionService(id: string):void {
    this.service.leerInstitucion(id)
        .subscribe(
          (data) => {
            this.institucion=data;
          },
          (error) => {
            console.log(error);
          }
        )
  }
}
