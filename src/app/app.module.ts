import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioCompComponent } from './component/inicio-comp/inicio-comp.component';
import { LoginCompComponent } from './component/login-comp/login-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioCompComponent,
    LoginCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
