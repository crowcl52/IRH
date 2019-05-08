import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { EventosComponent } from './eventos/eventos.component';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'eventos-y-capacitaciones', component: EventosComponent },
  { path: 'convocatorias', component: ConvocatoriasComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
