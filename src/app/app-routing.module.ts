import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComfortCompComponent } from './component/comfort-comp/comfort-comp.component';
import { ConsultarCompComponent } from './component/consultar-comp/consultar-comp.component';
import { DeLuxeCompComponent } from './component/de-luxe-comp/de-luxe-comp.component';
import { GimnasioCompComponent } from './component/gimnasio-comp/gimnasio-comp.component';
import { InicioCompComponent } from './component/inicio-comp/inicio-comp.component';
import { LavanderiaCompComponent } from './component/lavanderia-comp/lavanderia-comp.component';
import { LoginCompComponent } from './component/login-comp/login-comp.component';
import { ReservaCompComponent } from './component/reserva-comp/reserva-comp.component';
import { RestautanteCompComponent } from './component/restautante-comp/restautante-comp.component';
import { SuperiorCompComponent } from './component/superior-comp/superior-comp.component';


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
  {path: 'lavanderia', component: LavanderiaCompComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
