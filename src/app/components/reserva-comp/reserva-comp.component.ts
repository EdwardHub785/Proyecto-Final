import { Component, OnInit } from '@angular/core';
import { HotelServService } from '../../services/hotel-serv.service'
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-reserva-comp',
  templateUrl: './reserva-comp.component.html',
  styleUrls: ['./reserva-comp.component.css']
})
export class ReservaCompComponent implements OnInit {

  constructor(public servReserva: HotelServService) { }

  ngOnInit(): void {
  }
  reservando(datosReserva: NgForm) {
    const valAno = parseInt(String(Date()).substring(10));
    const valDia = parseInt(String(Date()).substring(8));
    const valMes = String(Date()).substring(2,3);

    const ano = parseInt(String(datosReserva.value.f_entrada).substring(0,4));
    const mes = parseInt(String(datosReserva.value.f_entrada).substring(5,7));
    const dia = parseInt(String(datosReserva.value.f_entrada).substring(8,10));
    const ano1 = parseInt(String(datosReserva.value.f_salida).substring(0,4));
    const mes1 = parseInt(String(datosReserva.value.f_salida).substring(5,7));
    const dia1 = parseInt(String(datosReserva.value.f_salida).substring(8,10));
    
    const anos = ano1-ano;
    const meses = mes1-mes;
    const dias = dia1-dia;
if (ano < valAno || ano1 < valAno){
  alert("El año no puede ser menor a la fecha actual")
}else if(dia < valDia || dia1 < valDia){
  alert("El dia no puede ser menor a la fecha actual")
}
    console.log(valMes)
  
    if (datosReserva.value.nombre == "") {
      alert("Nombre no puede quedar vacio");
    } else if (datosReserva.value.apellido == "") {
      alert("Apellido no puede quedar vacio");
    } else {
      this.servReserva.crearReserva(datosReserva.value).subscribe({
        next: (res) => {
          console.log(res)
          alert("Su Reserva se realizo con exito")
          datosReserva.reset()
        },
        error: (err) => console.log(err)
      })
    }
  }
}
