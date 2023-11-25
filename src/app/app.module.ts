import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlojamientoComponent } from './alojamiento/alojamiento.component';
import { GastronomiaComponent } from './gastronomia/gastronomia.component';
import { ComerciosComponent } from './comercios/comercios.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroEmpresarioComponent } from './registro-empresario/registro-empresario.component';
import {GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './perfil/perfil.component';

const appRoutes: Routes=[];

@NgModule({
  declarations: [
    AppComponent,
    AlojamientoComponent,
    GastronomiaComponent,
    ComerciosComponent,
    InicioSesionComponent,
    RegistrarseComponent,
    InicioComponent,
    ErrorComponent,
    FooterComponent,
    NavbarComponent,
    RegistroEmpresarioComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    GoogleMapsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
