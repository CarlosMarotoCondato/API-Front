import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { tarjetaCredito } from 'src/app/models/tarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-tarjeta-credito-list',
  templateUrl: './tarjeta-credito-list.component.html',
  styleUrls: ['./tarjeta-credito-list.component.css']
})
export class TarjetaCreditoListComponent implements OnInit {

  tarjetas : tarjetaCredito[] = [];

  constructor(public tarjetaService: TarjetaService) { }

  // ngOnInit(): void {
    
  //   this.tarjetas = this.tarjetaService.obtenerTarjetas();
  //   this.dataSource = new MatTableDataSource<tarjetaCredito>(this.tarjetas);

  //   console.log( this.tarjetas);
  // }

  async ngOnInit() {
   
    this.tarjetas = await this.tarjetaService.obtenerTarjetas()
    
    this.dataSource = new MatTableDataSource<tarjetaCredito>(this.tarjetas);

    console.log(this.tarjetas);
    
  }


  displayedColumns: string[] = ['titular', 'numeroTarjeta', 'fechaExpiracion', 'cvv'];
  dataSource = new MatTableDataSource<tarjetaCredito>(this.tarjetas);

}
