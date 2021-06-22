import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { cargo } from '../../interfaces/cargo-interface';
import { CargosService } from '../../services/services.service';

@Component({
  selector: 'app-listado-cargo',
  templateUrl: './listado-cargo.component.html'
})
export class ListadoCargoComponent implements OnInit {

    public listaCargos: cargo[]=[];

    modalAgregar: boolean= false;

    pageActual:number = 1;

    cargo: cargo={
      id_cargo: "",
      descripcion_cargo: ""
    }


    constructor(private service: CargosService){}
  
    ngOnInit(): void {
    this.leerCargosServices();
    }
    limpiarObjetoCargo(): void{
      this.cargo={
        id_cargo: "",
        descripcion_cargo: ""
      }
    }
    leerCargosServices(): void{
      this.service.leerCargos()
          .subscribe(
            (data) => {
              this.listaCargos=data;
            },
            (error) =>{
              console.log(error);
            }
          )
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
    
    abrirModalAgregar():void{
      this.modalAgregar=true;
    }
  
    cerrarModalAgregar():void{
      this.limpiarObjetoCargo();
      this.modalAgregar=false;
    }

    agregarCargoService():void{
      if(this.validarFormulario()){
          this.service.agregarCargo(this.cargo)
              .subscribe(
                (data) => {
                  if(data == null){
                    this.alertaCorrecta('Se creó el cargo correctamente.');
                    this.limpiarObjetoCargo();
                    this.leerCargosServices();
                    this.cerrarModalAgregar();
                  }
                },
                (error) => {
                  if(error.status == 400){
                    console.log(error);
                    this.alertaError('Error al crear el cargo, intentelo mas tarde o verifique si ya existe');
                  }
                }
              );
    }
  }

    validarFormulario():boolean{
      if(this.cargo.descripcion_cargo == "" || this.cargo.descripcion_cargo.length <= 10){
        this.alertaError('Ingrese un cargo con longitud válida, debe tener al menos 10 carácteres');
        return false;
      }
      return true;
    }
  }
