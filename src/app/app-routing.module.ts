import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioCompComponent } from './component/inicio-comp/inicio-comp.component';
import { LoginCompComponent } from './component/login-comp/login-comp.component';
import { ReservaCompComponent } from './component/reserva-comp/reserva-comp.component';


const routes: Routes = [
  {path: 'inicio', component : InicioCompComponent},
  {path: 'login', component: LoginCompComponent},
  {path: 'reserva', component: ReservaCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
