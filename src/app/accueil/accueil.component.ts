import { Position } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { } from 'googlemaps';

@Component({
selector: 'app-accueil',
templateUrl: './accueil.component.html',
styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

parkings: any;

constructor(private httpClient: HttpClient) { }

map: google.maps.Map;

ngOnInit(): void {
  
// Loop through the results array and place a marker for each
// set of coordinates.
var script = document.createElement('script');
  var script2 = document.createElement('script');
  
  script2.text = "const eqfeed_callback = function (results) {"
  +"   for (let i = 0; i < results.features.length; i++) {"
  +"     const coords = results.features[i].geometry.coordinates;"
  +"     const latLng = new google.maps.LatLng(coords[1], coords[0]);"
  +"     new google.maps.Marker({"
  +"       position: latLng,"
  +"       map: map,"
  +"     });"
  +"   }"
  +" };";
  script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
  document.getElementsByTagName('head')[0].appendChild(script2);
  document.getElementsByTagName('head')[0].appendChild(script);
}


ngAfterViewInit(){
  this.initMap();

  
}


initMap(): void {
  var propriete_maps = {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 2,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  this.map = new google.maps.Map(document.getElementById("map"), propriete_maps);
    // Try HTML5 geolocation.
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.map.setCenter(pos);
        const marker = new google.maps.Marker({
          position: pos,
          map: this.map,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }
        });
});



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

}
