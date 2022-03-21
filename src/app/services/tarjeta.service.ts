import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tarjetaCredito } from '../models/tarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  myAppUrl = 'https://localhost:44357/';
  myApiUrl = 'api/TarjetaCredito';
  lista: tarjetaCredito[] = [];
  private actualizarFormulario = new BehaviorSubject<tarjetaCredito>({} as any);

  constructor( private http:HttpClient ) { }

guardarTarjeta(tarjeta: tarjetaCredito): Observable<tarjetaCredito> {
  return this.http.post<tarjetaCredito>(this.myAppUrl+this.myApiUrl, tarjeta)
}

eliminarTarjeta(id:number): Observable<tarjetaCredito> {
  return this.http.delete<tarjetaCredito>(this.myAppUrl + this.myApiUrl+ '/' + id);
}

async obtenerTarjetas() : Promise<tarjetaCredito[]>{

  let tarjetas = await this.http.get<tarjetaCredito[]>(this.myAppUrl+this.myApiUrl).toPromise()
  
  return tarjetas;

}

  actualizarTarjeta(id: number, tarjeta:tarjetaCredito ) : Observable<tarjetaCredito>{
    return this.http.put<tarjetaCredito>(this.myAppUrl + this.myApiUrl + '/' +id, tarjeta);
  }

  actualizar(tarjeta){
    this.actualizarFormulario.next(tarjeta);
  }

  obtenerTarjeta(): Observable<tarjetaCredito>{
    return this.actualizarFormulario.asObservable();
  }

}
