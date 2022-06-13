import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioCompComponent } from './component/inicio-comp/inicio-comp.component';
import { LoginCompComponent } from './component/login-comp/login-comp.component';
import { RecepcionCompComponent } from './component/recepcion-comp/recepcion-comp.component';
import { ReservaCompComponent } from './component/reserva-comp/reserva-comp.component';
import { DeLuxeCompComponent } from './component/de-luxe-comp/de-luxe-comp.component';
import { ComfortCompComponent } from './component/comfort-comp/comfort-comp.component';
import { SuperiorCompComponent } from './component/superior-comp/superior-comp.component';
import { ConsultarCompComponent } from './component/consultar-comp/consultar-comp.component';
import { RestautanteCompComponent } from './component/restautante-comp/restautante-comp.component';
import { GimnasioCompComponent } from './component/gimnasio-comp/gimnasio-comp.component';
import { LavanderiaCompComponent } from './component/lavanderia-comp/lavanderia-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioCompComponent,
    LoginCompComponent,
    RecepcionCompComponent,
    ReservaCompComponent,
    DeLuxeCompComponent,
    ComfortCompComponent,
    SuperiorCompComponent,
    ConsultarCompComponent,
    RestautanteCompComponent,
    GimnasioCompComponent,
    LavanderiaCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
