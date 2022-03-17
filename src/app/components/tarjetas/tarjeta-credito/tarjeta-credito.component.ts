import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  email = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  titular : string;
  nTarjeta : string;
  fechaEx : string;
  cvv : string;

  constructor() { }

  ngOnInit(): void {

  }

  enviaFormulario(){
    console.log(this.titular);
    console.log(this.nTarjeta);
    console.log(this.fechaEx);
    console.log(this.cvv);
  }

}
