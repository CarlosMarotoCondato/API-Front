import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tarjetaCredito } from '../models/tarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  myAppUrl = 'https://localhost:44357/';
  myApiUrl = 'api/TarjetaCredito';
  lista: tarjetaCredito[] = [];

  constructor( private http:HttpClient) { }

guardarTarjeta(tarjeta: tarjetaCredito): Observable<tarjetaCredito> {
  return this.http.post<tarjetaCredito>(this.myAppUrl+this.myApiUrl, tarjeta)
}

// obtenerTarjetas():tarjetaCredito[]{
//     this.http.get(this.myAppUrl+this.myApiUrl).subscribe(data => {
//       this.lista = data as tarjetaCredito[];
//       console.log(this.lista);
//     })

//     return this.lista;
  
//   }

  async obtenerTarjetas() : Promise<tarjetaCredito[]>{
  

    let tarjetas = await this.http.get<tarjetaCredito[]>(this.myAppUrl+this.myApiUrl).toPromise()

    
    return tarjetas;
  
  }

}
