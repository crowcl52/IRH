import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HistoriaComponent } from './historia/historia.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { EventosComponent } from './eventos/eventos.component';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    HistoriaComponent,
    DocumentosComponent,
    EventosComponent,
    ConvocatoriasComponent,
    ContactViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
