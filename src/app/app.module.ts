import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeParkingComponent } from './liste-parking/liste-parking.component';
import { ProfilComponent } from './profil/profil.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CheminComponent } from './chemin/chemin.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeParkingComponent,
    LoginComponent,
    ReservationComponent,
    CheminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
