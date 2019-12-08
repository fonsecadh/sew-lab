"use strict";
class Geolocalizacion {
    showMap() {
        let kyotoAquarium = { lat: 34.987599, lng: 135.747683 };
        let theMap = new google.maps.Map(document.getElementById("map-canvas"), { zoom: 18, center: kyotoAquarium });
        let theMarker = new google.maps.Marker({ position: kyotoAquarium, map: theMap }); 
    }
}

var geoloc = new Geolocalizacion();




