import { HttpClient } from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-liste-parking',
  templateUrl: './liste-parking.component.html',
  styleUrls: ['./liste-parking.component.scss']
})
export class ListeParkingComponent implements OnInit {

  users ;
  parkings;
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.getAllParkings();
    this.getAllUser();
  }

  getAllParkings() {
    this.httpClient
      .get<any[]>(environment.server + "parkings")
      .subscribe(
        (response) => {
          this.parkings = response;
          console.log(response);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getAllUser() {
    this.httpClient
      .get<any[]>(environment.server + "users")
      .subscribe(
        (response) => {
          this.users = response;
          console.log(response);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
