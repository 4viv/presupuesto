import { PresupuestoService } from './../../services/presupuesto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  presupuesto: number;

  constructor(private _presupuestoService: PresupuestoService,
              private route: Router) {
    this.presupuesto = _presupuestoService.presupuesto;
  }

  ngOnInit(): void {

    // Redirecciona si actualizamos
    if (this.presupuesto === 0) {
      this.route.navigate(['/']);
    }
  }
}
