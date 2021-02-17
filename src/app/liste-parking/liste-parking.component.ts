import { HttpClient } from '@angular/common/http';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-liste-parking',
  templateUrl: './liste-parking.component.html',
  styleUrls: ['./liste-parking.component.css']
})
export class ListeParkingComponent implements OnInit {

  datas ;
  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.getAllParkings();
  }

  getAllParkings() {
    this.httpClient
      .get<any[]>(environment.server + "alls")
      .subscribe(
        (response) => {
          this.datas = response;
          console.log(response);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
