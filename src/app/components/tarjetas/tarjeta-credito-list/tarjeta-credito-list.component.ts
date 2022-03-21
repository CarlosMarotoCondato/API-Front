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

  ngOnInit() {

   this.recogeInformacion();
    
  }

  async recogeInformacion(){
    this.tarjetas = await this.tarjetaService.obtenerTarjetas()
    
    this.dataSource = new MatTableDataSource<tarjetaCredito>(this.tarjetas);

    console.log(this.tarjetas);
  }


  displayedColumns: string[] = ['titular', 'numeroTarjeta', 'fechaExpiracion', 'edit','delete'];
  dataSource = new MatTableDataSource<tarjetaCredito>(this.tarjetas);

  eliminar(id:number){
    if(confirm("Esta seguro que desea eliminar el registro?")){
      this.tarjetaService.eliminarTarjeta(id).subscribe(async data => {
        alert("Registro eliminado");
        console.log(this.tarjetas);

        this.recogeInformacion();

      })
    }
  }

  editar(tarjeta){
    this.tarjetaService.actualizar(tarjeta);
  }

}
