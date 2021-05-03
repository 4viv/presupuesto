import { PresupuestoService } from './../../../services/presupuesto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  gasto: string = '';
  cantidad: number = 0;
  errorGaasto: string = '';
  gastoIncorrecto: boolean = false;

  constructor(private _presupuesto: PresupuestoService) {}

  ngOnInit(): void {
  }

  agregarGasto(){

    if (this.cantidad > this._presupuesto.restante) {
      this.gastoIncorrecto = true;
      this.errorGaasto = 'La cantidad es mayor a su presupuesto';
      return;
    }

    if (this.gasto === '' || this.cantidad <= 0 ) {
      this.gastoIncorrecto = true;
      this.errorGaasto = 'Revisa bien los campos'
    } else {

      // Creamos el objeto
      const GASTO = {
        nombreGasto: this.gasto,
        cantidadGasto: this.cantidad
      }

      // Enviar objeto a los obserbables
      this._presupuesto.agregarGasto(GASTO);

      // Reiniciamos el formulario
      this.gastoIncorrecto = false;
      this.errorGaasto = '';
      this.gasto = '';
      this.cantidad = 0;
    }
  }

}
