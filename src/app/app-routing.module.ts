import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeParkingComponent } from './liste-parking/liste-parking.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  
{ path: 'accueil', component: AccueilComponent },
{ path: 'list', component: ListeParkingComponent },
{ path: 'profil', component: ProfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
