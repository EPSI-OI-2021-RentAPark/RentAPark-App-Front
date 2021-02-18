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

ngOnInit(): void {
  

}


ngAfterViewInit(){
  this.initMap();

  
}


initMap(): void {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  var propriete_maps = {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 15,
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
const onChangeHandler = function () {
  directionsService.route(
    {
      origin: {
        query: (document.getElementById("start") as HTMLInputElement).value,
      },
      destination: {
        query: (document.getElementById("end") as HTMLInputElement).value,
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
(document.getElementById("start") as HTMLElement).addEventListener(
  "change",
  onChangeHandler
);
(document.getElementById("end") as HTMLElement).addEventListener(
  "change",
  onChangeHandler
);
}

calculateAndDisplayRoute(
  directionsService: google.maps.DirectionsService,
  directionsRenderer: google.maps.DirectionsRenderer
) {
  directionsService.route(
    {
      origin: {
        query: (document.getElementById("start") as HTMLInputElement).value,
      },
      destination: {
        query: (document.getElementById("end") as HTMLInputElement).value,
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
}
}
