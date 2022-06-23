import { Component, OnInit } from '@angular/core';
import { HotelServService } from '../../services/hotel-serv.service'
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';
import { Reserva_modelo } from '../../models/reservas'



@Component({
  selector: 'app-consulta-reserva-comp',
  templateUrl: './consulta-reserva-comp.component.html',
  styleUrls: ['./consulta-reserva-comp.component.css']
})
export class ConsultaReservaCompComponent implements OnInit {

  constructor(public servicioLuis: HotelServService, private router: Router) { }

  ngOnInit(): void {
    this.listadoReservas();    
  }

  eliminarReserva(idReserva: any) {
    let respuesta = confirm("Esta seguro de Eliminar su reserva" + idReserva)
    if (respuesta){
      this.servicioLuis.eliminaReserva(idReserva).subscribe({
        next: (res) => this.router.navigate(["/inicio"])
      })
    }
  }

listadoReservas(){
  this.servicioLuis.obtenerReservas().subscribe({
    next: (res) => {
      console.log("___obteniendo Reservas")
      
    },
    error: (err) => console.log(err)
  });
}

agregarDato(form:NgForm){
  if (form.value._id){
    this.servicioLuis.update(form.value).subscribe({
      next: (res) => {
        console.log("___modificando")
        this.listadoReservas()
        alert("Su Reserva se ha Modificado Correctamente!!! Disfrute de su estadia.")
        form.reset(form)
        this.router.navigate(["/inicio"])
      },
      error: (err) => console.log(err)
    });
  }else{
    this.servicioLuis.create(form.value).subscribe({
      next: (res) => {
        console.log("________Agregando___")
      this.listadoReservas()
    },
    error: (err) => console.log(err)
    });
  }
 
  
}

modificarReserva(reserva:Reserva_modelo){
  console.log(reserva)
  this.servicioLuis.datosRes = reserva;
}










  // consultarDatos(validar: NgForm) {
  //   console.log(validar)
  //   if (validar.value.documento) {
  //     this.servicioLuis.modificarReserva(validar.value).subscribe({
  //       next: (res) => {
  //         console.log("___modificando___" + res)
  //         this.servicioLuis.documentos = res
  //     },
  //       error: (err) => console.log(err)
  //     })
     //} //else {
    //   this.servicioLuis.update(validar.value).subscribe({
    //     next: (res) => {
    //       console.log("__agregando__");
    //       console.log(res)
    //     },
    //     error: (err) => console.log(err)
    //   });
    // }
  //}

}
