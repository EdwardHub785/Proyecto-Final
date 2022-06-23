import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Reserva_modelo } from '../models/reservas'

@Injectable({
  providedIn: 'root'
})
export class HotelServService {

  URL_API = 'http://localhost:3500'

  documentos: Reserva_modelo[] = []

  datosRes: Reserva_modelo = {
    nombre: "",
    apellido: "",
    documento: "",
    email: "",
    direccion: "",
    f_entrada: "",
    f_salida: "",
    pais: "",
    estado: "",
    c_postal: "",
    mayor_edad: ""
  }

  constructor(private http: HttpClient) { }


  consultarRes(datos: Reserva_modelo) {
    let peticion = this.http.get<Reserva_modelo[]>(this.URL_API + '/consultar/' + datos.documento)
    return peticion;
  }

  eliminaReserva(idReserva: string) {
    let peticion = this.http.delete(this.URL_API + '/eliminar_reserva/' + idReserva)
    return peticion
  }

  obtenerReservas(){
    let  peticion = this.http.get<Reserva_modelo[]>(this.URL_API + '/obtener_reservas')
    return peticion
  }

  create(datos:Reserva_modelo){
    let peticion = this.http.post(this.URL_API + '/crear_reserva',datos)
    return peticion
  }

  update(datos:Reserva_modelo){
    let peticion = this.http.put(this.URL_API + '/modificar_reserva/' + datos._id, datos)
    return peticion
  }

  crearReserva(datos:Reserva_modelo){
    console.log(datos)
    let peticion = this.http.post(this.URL_API + '/creando',datos)
    return peticion
  }














  // modificarReserva(doc: Reserva_modelo){
  //   console.log(doc)
  //   let peticion  = this.http.post(this.URL_API + '/modificar', doc.documento )
  //   return peticion;
  // }

  // update(datos:Reserva_modelo){
  //   let peticion = this.http.put(this.URL_API + '/modificar_reserva' + datos._id,datos)
  //   return peticion;
  // }
}
