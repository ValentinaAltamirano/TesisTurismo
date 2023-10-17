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

const appRoutes: Routes=[
  {path:'', component: InicioComponent},
  {path:'alojamiento', component:AlojamientoComponent},
  {path:'gastronomia', component:GastronomiaComponent},
  {path:'comercio', component:ComerciosComponent},
  {path: 'inicioSesion', component: InicioSesionComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: '**', component: ErrorComponent}
];

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
