import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  // variable observable
  private gasto$ = new Subject<any>();

  presupuesto: number;
  restante: number;

  constructor() {
    this.presupuesto = 0;
    this.restante = 0;
   }

   agregarGasto(gasto: any){
     this.restante = this.restante - gasto.cantidadGasto;
     this.gasto$.next(gasto);
   }

   getGasto(): Observable<any>{
     return this.gasto$.asObservable();
   }
}
