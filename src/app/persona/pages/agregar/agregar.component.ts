import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';


import { cargo } from 'src/app/cargo/interfaces/cargo-interface';
import { persona } from '../../interfaces/persona-interface';
import { Empresa } from '../../../empresa/interfaces/empresa-interface';
import { tiposdocumentos } from 'src/app/shared/interfaces/shared-interfaces';
import { sharedServices } from '../../../shared/services/services.service';
import { CargosService } from '../../../cargo/services/services.service';
import { ServiciosEmpresa } from '../../../empresa/services/services.service';
import { PersonaService } from '../../services/services.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  listaDocumentos: tiposdocumentos []=[];
  listaCargos: cargo [] = [];
  listaEmpresas: Empresa[]=[];
  nuevaPersona: persona={
    id_tipo_documento: "",
    tipo_documento: "",
    id_persona: "",
    id_cargo: "",
    id_empresa: "",
    numero_documento: "",
    nombre1: "",
    nombre2: "",
    apellido1: "",
    apellido2: "",
    correo: "",
    fecha_nacimiento: "",
    descripcion_cargo:"",
    nombre_empresa:""
  }
  constructor(
      private sharedServices: sharedServices,
      private cargoService: CargosService,
      private empresaService: ServiciosEmpresa,
      private PersonaService: PersonaService,
      private router: Router
      ) { }

  ngOnInit(): void {
    this.leerTiposDeDocumentosService();
    this.leerCargosService();
    this.leerEmpresasServices();
  }

  limpiarFormulario(): void{
    this.nuevaPersona={
      id_tipo_documento: "",
      tipo_documento: "",
      id_persona: "",
      id_cargo: "",
      id_empresa: "",
      numero_documento: "",
      nombre1: "",
      nombre2: "",
      apellido1: "",
      apellido2: "",
      correo: "",
      fecha_nacimiento: "yyyy-MM-dd",
      descripcion_cargo:"",
      nombre_empresa:""
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

  validarFormulario(): boolean{
    if(this.nuevaPersona.id_tipo_documento == ""){
      this.alertaError("Seleccione un tipo de documento");
      return false;
    }
    if(this.nuevaPersona.numero_documento == ""){
      this.alertaError("Digite un numero de documento");
      return false;
    }
    if(this.nuevaPersona.nombre1 == ""){
      this.alertaError("Digite al menos un nombre");
      return false;
    }
    if(this.nuevaPersona.apellido1 == ""){
      this.alertaError("Digite al menos un apellido");
      return false;
    }
    if(this.nuevaPersona.id_empresa == ""){
      this.alertaError("Seleccione la empresa para la cual trabaja");
      return false;
    }
    if(this.nuevaPersona.id_cargo == ""){
      this.alertaError("Seleccion un cargo");
      return false;
    }
    if(this.nuevaPersona.correo == ""){
      this.alertaError("Digite su correo electrónico");
      return false;
    }
    if(this.nuevaPersona.fecha_nacimiento == "" || this.nuevaPersona.fecha_nacimiento == "yyyy-MM-dd"){
      this.alertaError("Digite una fecha de nacimiento valida");
      return false;
    }
    return true;
  }

  leerTiposDeDocumentosService(): void{
    this.sharedServices.leerTiposDocumentos()
        .subscribe(
          (data: any) => {
            this.listaDocumentos=data.resul;
          },
          (error) => {
            console.log(error);
          }
        );
  }
  leerCargosService(): void{
    this.cargoService.leerCargos()
        .subscribe(
          (data:any) => {
            this.listaCargos=data.resul;
          },
          (error)=>{
            console.log(error);
          }
        );
  }
  leerEmpresasServices():void{
    this.empresaService.leerDatos()
        .subscribe(
          (data: any) =>{
            this.listaEmpresas=data.resul;
          },
          (error) => {
            console.log(error);
          }
        )
  }
  agregarPersonaServices():void{
    if(this.validarFormulario()){
      this.PersonaService.agregarPersona(this.nuevaPersona)
          .subscribe(
            (data : any) => {
              if(data.code === "200"){
                this.alertaCorrecta('Se creó la empresa correctamente.');
                this.limpiarFormulario();
                this.router.navigate(["personas"]);
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
}
