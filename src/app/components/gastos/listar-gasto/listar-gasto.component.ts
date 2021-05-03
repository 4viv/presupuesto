import { PresupuestoService } from './../../../services/presupuesto.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
    // OnDestroy para destruir la suscripcion del observable
export class ListarGastoComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  presupuesto: number =0;
  restante: number = 0;
  listaGastos: any[] = [];

  constructor(private _presupuesto: PresupuestoService) {
    this.subscription = this._presupuesto.getGasto().subscribe(res => {
      this.restante = this.restante - res.cantidadGasto;
      this.listaGastos.push(res);
    })
   }

  ngOnInit(): void {
    this.presupuesto = this._presupuesto.presupuesto;
    this.restante = this._presupuesto.presupuesto;
  }

  // Destruye la subscripcion
  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  aplicarColor(){
    if (this.presupuesto / 4 >= this.restante) {
      return 'alert alert-danger';
    } else if(this.presupuesto / 2 >= this.restante) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary';
    }
  }

}
