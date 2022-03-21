import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { tarjetaCredito } from 'src/app/models/tarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit, OnDestroy {

  formulario: FormGroup;
  subscription: Subscription;
  tarjeta: tarjetaCredito;
  idTarjeta = 0;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private tarjetaService : TarjetaService, private formBuilder: FormBuilder) { 
    this.formulario = this.formBuilder.group({
      id : 0,
      titular : ['', [Validators.required]],
      numeroTarjeta :  ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion :  ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv :  ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
   }

  ngOnInit(): void {
    this.subscription = this.tarjetaService.obtenerTarjeta().subscribe(data => {
      console.log(data);
      this.tarjeta = data;
      this.formulario.patchValue({
        titular: this.tarjeta.titular,
        numeroTarjeta : this.tarjeta.numeroTarjeta,
        fechaExpiracion: this.tarjeta.fechaExpiracion,
        cvv: this.tarjeta.cvv, 

      })
      this.idTarjeta = this.tarjeta.id;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  enviaFormulario(){
    if(this.idTarjeta === 0){
      this.agregarTarjeta();
    }else{
      this.editarTarjeta();
    }    

  }

  agregarTarjeta(){

    console.log(this.formulario);

    const tarjeta:tarjetaCredito = {
      titular : this.formulario.get('titular').value,
      numeroTarjeta : this.formulario.get('numeroTarjeta').value,
      fechaExpiracion : this.formulario.get('fechaExpiracion').value,
      cvv : this.formulario.get('cvv').value
    }

    console.log(tarjeta);

    this.tarjetaService.guardarTarjeta(tarjeta).subscribe(data => {
      console.log('Guardado exitosamente');
      this.formulario.reset();
      this.addNewItem("");
    })
  }

  editarTarjeta(){
    const tarjeta:tarjetaCredito = {
      id: this.tarjeta.id,
      titular : this.formulario.get('titular').value,
      numeroTarjeta : this.formulario.get('numeroTarjeta').value,
      fechaExpiracion : this.formulario.get('fechaExpiracion').value,
      cvv : this.formulario.get('cvv').value
    }

    this.tarjetaService.actualizarTarjeta(this.idTarjeta, tarjeta).subscribe(data =>{
      console.log('Editado exitosamente');
      this.formulario.reset();
      this.addNewItem("");
      this.idTarjeta=0;
    })
  }


  // Output para recargar la tabla cada vez que se añade un registro nuevo
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
