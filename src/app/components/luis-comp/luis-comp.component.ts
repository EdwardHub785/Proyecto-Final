import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelServService } from '../../services/hotel-serv.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-luis-comp',
  templateUrl: './luis-comp.component.html',
  styleUrls: ['./luis-comp.component.css']
})
export class LuisCompComponent implements OnInit {
  constructor(public servicioLuis: HotelServService, private router: Router) { }
  ngOnInit(): void {
  }
  consultarReserva(datos: NgForm) {
    this.servicioLuis.consultarRes(datos.value).subscribe({
      next: (res) => {
        if (res) {
          console.log(res)
          this.servicioLuis.documentos = res,
            this.router.navigate(["/reservado"])
          datos.reset()
        } else {
          alert("Su Reserva no esta Registrada")
          datos.reset()
        }
      },
      error: (err) => { alert("El numero de su reserva no existe") + err }
    })
  }
}
