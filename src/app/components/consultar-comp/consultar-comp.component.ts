import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { HotelServService } from '../../services/hotel-serv.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-consultar-comp',
  templateUrl: './consultar-comp.component.html',
  styleUrls: ['./consultar-comp.component.css']
})
export class ConsultarCompComponent implements OnInit {
  constructor(public servConsultar:HotelServService,public router:Router) { }

  ngOnInit(): void {
  }

  // consultar(consutaDatos: NgForm) {
  //   console.log(consutaDatos)
  //   this.servConsultar.consultarReserva(consutaDatos.value).subscribe({
  //     next: (res) => {
  //       console.log(res)
  //       this.router.navigate(["/reservado"])
  //     },
  //     error: (err) => console.log(err)
  //   })
  // }


}
