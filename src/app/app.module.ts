import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioCompComponent } from './components/inicio-comp/inicio-comp.component';
import { LoginCompComponent } from './components/login-comp/login-comp.component';
import { RecepcionCompComponent } from './components/recepcion-comp/recepcion-comp.component';
import { ReservaCompComponent } from './components/reserva-comp/reserva-comp.component';
import { DeLuxeCompComponent } from './components/de-luxe-comp/de-luxe-comp.component';
import { ComfortCompComponent } from './components/comfort-comp/comfort-comp.component';
import { SuperiorCompComponent } from './components/superior-comp/superior-comp.component';
import { ConsultarCompComponent } from './components/consultar-comp/consultar-comp.component';
import { RestautanteCompComponent } from './components/restautante-comp/restautante-comp.component';
import { GimnasioCompComponent } from './components/gimnasio-comp/gimnasio-comp.component';
import { LavanderiaCompComponent } from './components/lavanderia-comp/lavanderia-comp.component';
import { ConsultaReservaCompComponent } from './components/consulta-reserva-comp/consulta-reserva-comp.component';
import { LuisCompComponent } from './components/luis-comp/luis-comp.component';


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
    LavanderiaCompComponent,
    ConsultaReservaCompComponent,
    LuisCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
