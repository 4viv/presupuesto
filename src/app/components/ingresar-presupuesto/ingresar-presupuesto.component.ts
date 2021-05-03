import { PresupuestoService } from './../../services/presupuesto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent implements OnInit {

  cantidadIncorrecta: boolean = false;
  cantidad: number = 0;

  constructor(private _presupuestoService: PresupuestoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  agregar(){
    if (this.cantidad > 0) {
      this.cantidadIncorrecta = false;
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad;
      this.router.navigate(['/gastos']);
    } else {
      this.cantidadIncorrecta = true;
    }
  }
}
