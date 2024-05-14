import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { DatosComponent } from './pages/datos/datos.component';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { EjecutivoComponent } from './pages/ejecutivo/ejecutivo.component';
import { EstructuraComponent } from './pages/estructura/estructura.component';
import { GeograficaComponent } from './pages/geografica/geografica.component';
import { MainComponent } from './pages/main/main.component';
import {NofoundComponent} from './pages/nofound/nofound.component';

import { BanerComponent } from './commons/baner/baner.component';
import { FooterComponent } from './commons/footer/footer.component';
const routes: Routes = [
  { path : "", component : MainComponent},
  { path : "nofound", component : NofoundComponent},
  { path : "inicio", component : InicioComponent},
  { path : "datos", component : DatosComponent},
  { path : "directorio", component : DirectorioComponent}, 
  { path : "ejecutivo", component : EjecutivoComponent}, 
  { path : "estructura", component : EstructuraComponent},
  { path : "geografica", component : GeograficaComponent},      
  {path : "baner", component : BanerComponent},
  {path : "footer", component : FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
