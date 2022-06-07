import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioCompComponent } from './component/inicio-comp/inicio-comp.component';
import { LoginCompComponent } from './component/login-comp/login-comp.component';
import { RecepcionCompComponent } from './component/recepcion-comp/recepcion-comp.component';
import { ReservaCompComponent } from './component/reserva-comp/reserva-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioCompComponent,
    LoginCompComponent,
    RecepcionCompComponent,
    ReservaCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
