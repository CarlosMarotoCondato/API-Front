import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  booleano:boolean;

  addItem(newItem: string) {
    this.booleano = !this.booleano;
  }

}
