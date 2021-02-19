import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chemin',
  templateUrl: './chemin.component.html',
  styleUrls: ['./chemin.component.scss']
})
export class CheminComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  
map: google.maps.Map;
code : number;

ngOnInit(): void {
  this.code = Math.floor(Math.random() * (100 - 9000+1)) + 9000;
}


ngAfterViewInit(){
  this.initMap();
}


initMap(): void {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 7,
      center: { lat: 41.85, lng: -87.65 },
    }
  );
  directionsRenderer.setMap(map);

  const onChangeHandler = function () {
    directionsService.route(
      {
        origin: {
          query: "EPSI, Montpellier, France",
        },
        destination: {
          query: "Gare, Montpellier, France",
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  };
  onChangeHandler();
}
}
