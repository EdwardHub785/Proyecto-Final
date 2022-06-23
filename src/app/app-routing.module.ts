import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComfortCompComponent } from './components/comfort-comp/comfort-comp.component';
import { ConsultaReservaCompComponent } from './components/consulta-reserva-comp/consulta-reserva-comp.component';
import { ConsultarCompComponent } from './components/consultar-comp/consultar-comp.component';
import { DeLuxeCompComponent } from './components/de-luxe-comp/de-luxe-comp.component';
import { GimnasioCompComponent } from './components/gimnasio-comp/gimnasio-comp.component';
import { InicioCompComponent } from './components/inicio-comp/inicio-comp.component';
import { LavanderiaCompComponent } from './components/lavanderia-comp/lavanderia-comp.component';
import { LoginCompComponent } from './components/login-comp/login-comp.component';
import { LuisCompComponent } from './components/luis-comp/luis-comp.component';
import { ReservaCompComponent } from './components/reserva-comp/reserva-comp.component';
import { RestautanteCompComponent } from './components/restautante-comp/restautante-comp.component';
import { SuperiorCompComponent } from './components/superior-comp/superior-comp.component';


const routes: Routes = [
  {path: 'inicio', component : InicioCompComponent},
  {path: 'login', component: LoginCompComponent},
  {path: 'reserva', component: ReservaCompComponent},
  {path: 'deLuxe', component: DeLuxeCompComponent},
  {path: 'comfort', component:ComfortCompComponent},
  {path: 'superior', component:SuperiorCompComponent},
  {path: 'consultar', component:ConsultarCompComponent},
  {path: 'restaurante', component: RestautanteCompComponent},
  {path: 'gimnasio', component : GimnasioCompComponent},
  {path: 'lavanderia', component: LavanderiaCompComponent},
  {path: 'reservado', component: ConsultaReservaCompComponent},
  {path: 'consultando',component:LuisCompComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
