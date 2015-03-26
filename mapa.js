/*var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var merida = new google.maps.LatLng(20.9807788,-89.6217701);
  var mapOptions = {
    zoom: 17,
    center: merida
  }
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
}

function calcRoute() {
  var start = new google.maps.LatLng(20.9807788,-89.6217701);
  var end = new google.maps.LatLng(20.9807788,-89.6217701);
    

  var request = {
      origin: start,
      destination: end,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      var route = response.routes[0];
      var summaryPanel = document.getElementById('panel_ruta');
      summaryPanel.innerHTML = '';
      // For each route, display summary information.
      for (var i = 0; i < route.legs.length; i++) {
        var routeSegment = i + 1;
        summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + '</b><br>';
        summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
        summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
        summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
      }
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);*/
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
 var pos;
var pos1;
var haight = new google.maps.LatLng(20.9807788,-89.6217701);
var oceanBeach = new google.maps.LatLng(21.011757,-89.623417);

function initialize() {
  
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 14,
    center: haight
  }
  
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
geo();
calcRoute();
}

function geo(){
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var pos1 = new google.maps.LatLng(lat, lng);
  
    console.log(pos1);
    console.log(oceanBeach);
});
}

}
function calcRoute() {
 

    console.log(oceanBeach);
  var request = {

      origin: haight,
      destination: oceanBeach,
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      directionsDisplay.setMap(map);
        directionsDisplay.setPanel($("#panel_ruta").get(0));
    }
  });

}


google.maps.event.addDomListener(window, 'load', initialize);