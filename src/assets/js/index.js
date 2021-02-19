function eqfeed_callback(results) {
    for (let i = 0; i < results.features.length; i++) {
      const coords = results.features[i].geometry.coordinates;
      const latLng = new google.maps.LatLng(coords[1], coords[0]);
      new google.maps.Marker({
        position: latLng,
        map: map,
      });
    }
  };

  $(() => {
    var url = 'https://opendata.howardcountymd.gov/resource/96q9-qbh7.json';
    initialize();
    $.getJSON(url, function(data) {
      $.each(data, function(i, field) {
        $('#list').append("<li>" + data[i].location.longitude + " & " + data[i].location.latitude + "</li>");
        createMarker(data);

        function createMarker(data) {
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(data[i].location.latitude, data[i].location.longitude),
            map: map,
            title: field.crossroad
          });
        };
      });
    });

});