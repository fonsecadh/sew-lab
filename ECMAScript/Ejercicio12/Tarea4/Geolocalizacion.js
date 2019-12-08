"use strict";
class Geolocalizacion {
    showMap() {
        console.log("Here");
        let kyotoAquarium = { lat: 34.987599, lng: 135.747683 };
        let theMap = new google.maps.Map(document.getElementById("map-canvas"), { zoom: 18, center: kyotoAquarium });
        console.log("Map created");
        let theMarker = new google.maps.Marker({ position: kyotoAquarium, map: theMap }); 
        console.log("Marker created");
    }
}

var geoloc = new Geolocalizacion();




